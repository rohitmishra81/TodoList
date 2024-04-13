import React from 'react'

function Title() {
  return (
    <div className='title my-5' style={{ color: "#dda6a6" }}><h2> <br /><br /><br /> <br /> <br />
      Welcoming users to your to-do list app is a crucial step in creating a positive first impression. Here's a sample message you could use:

      "Welcome to our ToDoList app! We're thrilled to have you on board. With our user-friendly interface and powerful features, 
      managing your tasks and staying organized has never been easier. Let's get started! Simply add your tasks, set due dates, 
      and watch as you accomplish more with our app by your side. If you ever need assistance, feel free to explore our help section 
      or reach out to our support team. Here's to a productive and organized journey ahead!"

      Feel free to customize this message to match the tone and style of your app.
    </h2>
      <div className="mt-5 text-right mx-5 mb-5">
        <a href="/next"><button type="next" className="btn btn-primary" >Next</button></a>
      </div>

    </div>
  )
}

export default Title