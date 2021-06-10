import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  noConf:number=0;
  littleConf:number=0;
  goodConf:number=0;
  highConf:number=0;
  vHighConf:number=0;
  sArrGifs:string[]=["assets/images/no.gif","assets/images/little.gif","assets/images/good.gif","assets/images/high.gif","assets/images/very_high.gif"];
  sArrHeaders:string[]=["No Confidence","Little Confidence","Good Confidence","High Confidence","Very High Confidence"];
  iArrCounts:number[]=[0,0,0,0,0];
  iArrSelectedUsers:any[]=[[],[],[],[],[]];

  constructor(public dialog: MatDialog){}
  addUsers(iIndex:number)
  {


      const dialogRef= this.dialog.open(DialogBoardName,{ width: '250px',data:{name:''}});
      dialogRef.afterClosed().subscribe(result=>{

        let sDuplicates=(this.iArrSelectedUsers[iIndex] as Array<any>).filter(names=>names==result);
        if(sDuplicates.length==0&&result)
        {
          this.iArrCounts[iIndex]++;
          this.iArrSelectedUsers[iIndex].push(result);
        }


      })
  }

}

@Component({
  selector: 'dialog-div',
  templateUrl: './dialog.component.html',
})
export class DialogBoardName {

  constructor(
    public dialogRef: MatDialogRef<DialogBoardName>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }

  onNoClick(): void
  {
    this.dialogRef.close();
  }

}
