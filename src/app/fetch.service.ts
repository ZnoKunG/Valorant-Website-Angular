import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  async getAgents(role=''): Promise<Agent[]> {
    console.log('fetching data from agent endpoint ...');
    const resp = await fetch('https://valorant-api.com/v1/agents');
    console.log('fetch completed, converting to json ...');
    let agentsJson = await resp.json();
    console.log('convert to json completed');
    if (role !== '') {
      agentsJson = agentsJson.data.filter((agent) => agent.isPlayableCharacter === true && agent.role.displayName === role);
    } else {
      agentsJson = agentsJson.data.filter((agent) => agent.isPlayableCharacter === true);
    }

    const agents = [];
    agentsJson.forEach(agentJson => {
      const agent = new Agent();
      agent.name = agentJson.displayName;
      agent.description = agentJson.description;
      agent.displayImage = agentJson.displayIcon;
      agent.portraitURL = agentJson.fullPortraitV2;
      agent.role = agentJson.role.displayName;

      agents.push(agent);
    });
    return agents;
  }

  async getWeapons(type=''): Promise<Weapon[]> {
    console.log('fetching data from weapon endpoint ...');
    const resp = await fetch('https://valorant-api.com/v1/weapons');
    console.log('fetch completed, conerting to json ...');
    const weaponsJson = await resp.json();
    console.log('convert to json completed');
    let weaponsData;
    if (type !== '') {
      weaponsData = weaponsJson.data.filter((weapon) => weapon.category === type);
    } else {
      weaponsData = weaponsJson.data;
    }
    const weapons = [];
    weaponsData.forEach(weaponJson => {
      const weapon = new Weapon();
      weapon.name = weaponJson.displayName;
      weapon.category = weaponJson.category;
      weapon.displayImage = weaponJson.displayIcon;

      weapons.push(weapon);
    });
    return weapons;
  }

  async getRandomAgent(role=''): Promise<Agent> {
    const agents = await this.getAgents(role);
    const randIndex = Math.floor(Math.random() * agents.length);
    const randomAgent = agents[randIndex];
    console.log(randomAgent);
    return randomAgent;
  }

  async getRandomWeapon(type=''): Promise<Weapon> {
    const weapons = await this.getWeapons(type);
    const randIndex = Math.floor(Math.random() * weapons.length);
    const randomWeapon = weapons[randIndex];
    console.log(randomWeapon);
    return randomWeapon;
  }
}



class Agent {
  name: string;
  description: string;
  role: string;
  displayImage: string;
  portraitURL: string;
}


class Weapon {
  name: string;
  category: string;
  displayImage: string;
}
