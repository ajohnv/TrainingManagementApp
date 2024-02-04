export class Faculty{
public facultyName:string;
public subjects : string[];
public remarks:string;

constructor(name:string, subjects : string[], remarks:string)
{
  this.facultyName = name;
  this.subjects = subjects;
  this.remarks=remarks;
}
}
