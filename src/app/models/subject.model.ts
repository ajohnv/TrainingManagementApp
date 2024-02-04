export class CourseSubject{
  public id : number;
  public subjectName:string;
  public remarks:string;


  constructor(subjectName : string, remarks:string)
  {
    // this.id = id;
    this.subjectName = subjectName;
    this.remarks = remarks;
  }
  }
