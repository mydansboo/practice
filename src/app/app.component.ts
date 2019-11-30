import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  myNumber = 11

  ngOnInit() {
    let myNum: any = localStorage.getItem('a very special number to never ever forget')
    myNum = parseInt(myNum, 10)
    this.myNumber = myNum
  }

  doIt() {
    this.myNumber = this.myNumber + 11
    localStorage.setItem('a very special number to never ever forget', this.myNumber.toString())
  }
}
