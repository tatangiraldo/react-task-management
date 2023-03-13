import { LEVELS } from "../components/enums/levels.enums";

export class TaskModel{
   name        = '';
   description = '';
   completed   = false;
   level       = LEVELS.Normal;

   constructor(name, desc, completed, level){
        this.name = name;
        this.description = desc;
        this.completed = completed;
        this.level = level;
   }
}