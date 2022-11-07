import { Component, OnInit, Input, Output } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  image = '../../assets/img/kj.jpg';
  objectName = 'Name';
  disableButton = false;
  currentType = '';
  types = [];
  constructor(private fetchService: FetchService) {
  }

  assignObjectProperty(name, imgURL) {
    this.objectName = name;
    this.image = imgURL;
  }

  async randomAgent() {
    const agents = await this.fetchService.getAgents(this.currentType);
    await this.scrollingRandom(agents);
    const agent = await this.fetchService.getRandomAgent(this.currentType);
    this.assignObjectProperty(agent.name, agent.displayImage);
  }

  async randomWeapon() {
    const formatType = this.formatWeaponType(this.currentType);
    const weapons = await this.fetchService.getWeapons(formatType);
    await this.scrollingRandom(weapons);
    const weapon = await this.fetchService.getRandomWeapon(formatType);
    this.assignObjectProperty(weapon.name, weapon.displayImage);
  }

  formatWeaponType(type) {
    if (type !== '') {
      const formattedType = `EEquippableCategory::${type}`;
      return formattedType;
    } else {
      return type;
    }
  }

  async random() {
    if (this.name === 'Agent') {
      this.randomAgent();
    } else if (this.name === 'Weapon') {
      this.randomWeapon();
    }
  }


  async scrollingRandom(objects) {
    this.disableButton = true;
    let count = 0;
    const interval = setInterval(async () => {
    const object = objects[count];
    if (count >= objects.length - 1) {
      count = 0;
    }
    this.assignObjectProperty(object.name, object.displayImage);
    count++;
    }, 100);
    await setTimeout(() => {
      clearInterval(interval);
      this.disableButton = false;
    }, 3000);
  }
  async ngOnInit() {
    if (this.name === 'Agent') {
      this.types = [
        'Sentinel',
        'Controller',
        'Initiator',
        'Duelist',
      ];
    } else if (this.name === 'Weapon') {
      this.types = [
        'Sidearm',
        'SMG',
        'Shotgun',
        'Heavy',
        'Sniper'
      ];
    }
  }

  handleChangeType(event) {
    this.currentType = event.target.value.toString();
  }
}
