/*

validate Taskname
  ensure 0 < length < 1000
  return validity

validate due Date
  make sure value isnt empty
  get todays date
  ensure date entered is not before today
  return validity

validate priority
  ensure priority is not empty
  return validity

sort(ascending/descending,category,tasks)
  iterate





add Task
  validate
    Taskname
    Due Date
    Validate
  if any are invalid
    highlight 1 input section only
    display error message for highlighted section
    Keep text in fields
  if they are valid
    Send data in server as an object
    wait for response
      if invalid response
        alert user adding task failed
      if valid response
        remove information from form
        add task to task list
        sort task list based on current sorted  list
*/
