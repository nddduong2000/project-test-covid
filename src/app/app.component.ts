import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import * as moment from 'moment/moment.js';
import {defineLocale, itLocale} from "ngx-bootstrap/chronos";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-project';
  inputForm!: FormGroup;
  isShowInfor = false;
  dateOne: any;
  dateTwo: any;
  codeOne: any;
  codeTwo: any;
  bsValue: any;

  constructor(
    public formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      gioiTinh: ['Nam'],
      cccd: ['', [Validators.minLength(7), Validators.maxLength(20)]],
      bhyt: ['', [Validators.minLength(7), Validators.maxLength(20)]]
    })
  }

  get f(): any {
    return this.inputForm.controls;
  }

  changeDate(event: any) {
    if (event) {
      this.bsValue = moment(event).format('DD/MM/YYYY');
    }
  }
  searchInfor() {
    if (this.inputForm.invalid) {
      this.isShowInfor = false;
    } else {
      this.isShowInfor = true;
      this.randomCodeCovid();
      const date = moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
        .format();
      this.dateTwo = moment((new Date(date).getTime()-10000000)).format('DD/MM/YYYY');
      this.dateOne = moment((new Date(date).getTime()) - 8000000000).format('DD/MM/YYYY')
    }
  }
  randomCodeCovid() {
    const baseString =
      "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    const getRandomInt = (min: any, max: any) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const getRandomString = (length: any, base: any) => {
      let result = "";
      const baseLength = base.length;

      for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(0, baseLength);
        result += base[randomIndex];
      }
      return result;
    };
    const getRandomHex2 = () => {
      const baseString = "0123456789ABCDEF";
      return `${getRandomString(7, baseString)}`;
    };
    for (let i = 0; i < 2; i += 1) {
      this.codeOne = `${getRandomHex2()}`;
      this.codeTwo = `${getRandomHex2()}`;
    }
  }
}
