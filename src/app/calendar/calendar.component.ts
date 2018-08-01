import { Component, ChangeDetectionStrategy, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,CalendarEventTimesChangedEvent,CalendarDateFormatter } from 'angular-calendar';
import word from '../caldata';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
interface res {
    start: string;
    end: string;
    title: string;
}
let arr = [];
var _i=0;
while(word[_i]) {
    var num = word[_i];
    var col;
    if(num.color=='red'){
      col = colors.red;
    }
    else{
    col= colors.blue;
    }
    if(num){
      arr.push({
      start:new Date(num.start),
      end:new Date(num.end),
      title:num.title,
      location:num.location,
      color: col,
      description:num.description,
       meta: {
        incrementsBadgeTotal: false
      }
      
    });
    }
    _i++;
    
}
console.log(arr);
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';
    
  viewDate: Date = new Date();
   modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = arr;
  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {
    
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }


  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  



  ngOnInit(){
              
    
  }
  

}
