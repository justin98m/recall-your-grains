const MAX_TASKNAME_LENGTH = 75;

export default function validTaskName(taskName){
  return taskName.length > 0 && taskName.length <= MAX_TASKNAME_LENGTH;
}
