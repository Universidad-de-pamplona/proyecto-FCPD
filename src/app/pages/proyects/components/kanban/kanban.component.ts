import { Component ,  ElementRef, HostListener, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  standalone: true,
  imports: [CdkDropList, CdkDrag,CommonModule,ReactiveFormsModule],
})
export class KanbanComponent implements OnInit {

createTask() {

  if (this.createtaskForm.valid) {
    this.todo.push(this.createtaskForm.value.task);
    this.createtaskForm.reset();
    this.toggleInput() ;
  } else {
    return
  }
}
  createtaskForm: FormGroup;
  //private auth: AuthService




  constructor(private elementRef: ElementRef , private fb: FormBuilder) {
    this.createtaskForm = this.fb.group({
      task: ['', Validators.required],


    });

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  title = 'example';
  showInput = false;
  toggleInput() {
    this.showInput = !this.showInput;
  }
  @HostListener('document:click', ['$event'])

  onClick(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.showInput = false;
    }
  }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth'];
  doing = ['Take a shower', 'Check e-mail', 'Walk dog'];



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


public localData : Object[] = [
  {
    "Id": "Task 1",
    "Title": "Task - 29001",
    "Status": "Open",
    "Summary": "Analyze the new requirements gathered from the customer.",
    "Type": "Story",
    "Priority": "Low",
    "Estimate": 3.5,
    "Assignee": "Nancy Davloio"
},
{
    "Id": "Task 2",
    "Title": "Task - 29002",
    "Status": "In Progress",
    "Summary": "Improve application performance",
    "Type": "Improvement",
    "Priority": "Normal",
    "Estimate": 6,
    "Assignee": "Andrew Fuller"
},
{
    "Id": "Task 3",
    "Title": "Task - 29003",
    "Status": "Open",
    "Summary": "Arrange a web meeting with the customer to get new requirements.",
    "Type": "Others",
    "Priority": "Critical",
    "Estimate": 5.5,
    "Assignee": "Janet Leverling"
},
{
    "Id": "Task 4",
    "Title": "Task - 29004",
    "Status": "In Progress",
    "Summary": "Fix the issues reported in the IE browser.",
    "Type": "Bug",
    "Priority": "Critical",
    "Estimate": 2.5,
    "Assignee": "Janet Leverling"
},
{
    "Id": "Task 5",
    "Title": "Task - 29005",
    "Status": "Review",
    "Summary": "Fix the issues reported by the customer.",
    "Type": "Bug",
    "Priority": "Low",
    "Estimate": "3.5",
    "Assignee": "Steven walker"
},
{
    "Id": "Task 6",
    "Title": "Task - 29007",
    "Status": "Testing",
    "Summary": "Testing new requirements",
    "Type": "Improvement",
    "Priority": "Low",
    "Estimate": 1.5,
    "Assignee": "Robert King"
},
{
    "Id": "Task 7",
    "Title": "Task - 29009",
    "Status": "Review",
    "Summary": "Fix the issues reported in Safari browser.",
    "Type": "Bug",
    "Priority": "Critical",
    "Estimate": 1.5,
    "Assignee": "Nancy Davloio"
},
{
    "Id": "Task 8",
    "Title": "Task - 29010",
    "Status": "Close",
    "Summary": "Test the application in the IE browser.",
    "Type": "Story",
    "Priority": "Low",
    "Estimate": 5.5,
    "Assignee": "Margaret hamilt"
},
{
    "Id": "Task 9",
    "Title": "Task - 29011",
    "Status": "Testing",
    "Summary": "Testing the issues reported by the customer.",
    "Type": "Story",
    "Priority": "High",
    "Estimate": 1,
    "Assignee": "Steven walker"
},
{
    "Id": "Task 10",
    "Title": "Task - 29015",
    "Status": "Open",
    "Summary": "Show the retrieved data from the server in grid control.",
    "Type": "Story",
    "Priority": "High",
    "Estimate": 5.5,
    "Assignee": "Margaret hamilt"
},
{
    "Id": "Task 11",
    "Title": "Task - 29016",
    "Status": "In Progress",
    "Summary": "Fix cannot open user’s default database SQL error.",
    "Priority": "Critical",
    "Type": "Bug",
    "Estimate": 2.5,
    "Assignee": "Janet Leverling"
},
{
    "Id": "Task 12",
    "Title": "Task - 29017",
    "Status": "Review",
    "Summary": "Fix the issues reported in data binding.",
    "Type": "Story",
    "Priority": "Normal",
    "Estimate": "3.5",
    "Assignee": "Janet Leverling"
},
{
    "Id": "Task 13",
    "Title": "Task - 29018",
    "Status": "Close",
    "Summary": "Analyze SQL server 2008 connection.",
    "Type": "Story",
    "Priority": "Critical",
    "Estimate": 2,
    "Assignee": "Andrew Fuller"
},
{
    "Id": "Task 14",
    "Title": "Task - 29019",
    "Status": "Testing",
    "Summary": "Testing databinding issues.",
    "Type": "Story",
    "Priority": "Low",
    "Estimate": 1.5,
    "Assignee": "Margaret hamilt"
},
{
    "Id": "Task 15",
    "Title": "Task - 29020",
    "Status": "Close",
    "Summary": "Analyze grid control.",
    "Type": "Story",
    "Priority": "High",
    "Estimate": 2.5,
    "Assignee": "Margaret hamilt"
},
{
    "Id": "Task 16",
    "Title": "Task - 29021",
    "Status": "Close",
    "Summary": "Stored procedure for initial data binding of the grid.",
    "Type": "Others",
    "Priority": "Critical",
    "Estimate": 1.5,
    "Assignee": "Steven walker"
},
{
    "Id": "Task 17",
    "Title": "Task - 29022",
    "Status": "Close",
    "Summary": "Analyze stored procedures.",
    "Type": "Story",
    "Priority": "Critical",
    "Estimate": 5.5,
    "Assignee": "Janet Leverling"
},
{
    "Id": "Task 18",
    "Title": "Task - 29023",
    "Status": "Testing",
    "Summary": "Testing editing issues.",
    "Type": "Story",
    "Priority": "Critical",
    "Estimate": 1,
    "Assignee": "Nancy Davloio"
},
{
    "Id": "Task 19",
    "Title": "Task - 29024",
    "Status": "Review",
    "Summary": "Test editing functionality.",
    "Type": "Story",
    "Priority": "Normal",
    "Estimate": 0.5,
    "Assignee": "Nancy Davloio"
},
{
    "Id": "Task 20",
    "Title": "Task - 29025",
    "Status": "Open",
    "Summary": "Enhance editing functionality.",
    "Type": "Improvement",
    "Priority": "Low",
    "Estimate": 3.5,
    "Assignee": "Andrew Fuller"
}
];



}
