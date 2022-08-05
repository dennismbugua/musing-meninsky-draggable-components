// import React from "react";
// import "./styles.css";
// const IconBox = require("../public/test.png");

// export default function App() {
//   return (
//     <div className="App">
//       <section className="drag_container">
//         <div className="container">
//           <div className="drag_column">
//             <div className="drag_row">
//               <h4>New Order</h4>
//               <div className="card">
//                 <div className="img">
//                   <img src={IconBox} alt="box" />
//                 </div>
//                 <div className="card_right">
//                   <div className="status">new order</div>
//                   <div className="days">5 days left</div>
//                   <div className="time">20 hrs</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
class TaskList extends React.Component {
  state = { tasks: [] };
  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      tasks
    });
  }
  onDragStart = evt => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  onDragEnd = evt => {
    evt.currentTarget.classList.remove("dragged");
  };
  onDragEnter = evt => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  onDragLeave = evt => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  onDragOver = evt => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };
  onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let tasks = this.state.tasks;
    console.log("data", data, status);
    let updated = tasks.map(task => {
      if (task.id.toString() === data.toString()) {
        task.status = status;
      }
      return task;
    });
    this.setState({ tasks: updated });
  };

  render() {
    const { tasks } = this.state;
    console.log("tasks", tasks);
    let pending = tasks.filter(t => t.status === "pending");
    let done = tasks.filter(t => t.status === "done");
    let newOrder = tasks.filter(t => t.status === "new");
    return (
      <div className="container">
        <div
          className="order small-box"
          onDragLeave={e => this.onDragLeave(e)}
          onDragEnter={e => this.onDragEnter(e)}
          onDragEnd={e => this.onDragEnd(e)}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, false, "new")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>New Order</h4>
                  {newOrder.map(task => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={e => this.onDragStart(e)}
                      onDragEnd={e => this.onDragEnd(e)}
                    >
                      <div className="img">
                        <img src={task.image} alt="box" />
                      </div>
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="pending small-box"
          onDragLeave={e => this.onDragLeave(e)}
          onDragEnter={e => this.onDragEnter(e)}
          onDragEnd={e => this.onDragEnd(e)}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, false, "pending")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Pending</h4>
                  {pending.map(task => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={e => this.onDragStart(e)}
                      onDragEnd={e => this.onDragEnd(e)}
                    >
                      <div className="img">
                        <img src={task.image} alt="box" />
                      </div>
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="done small-box"
          onDragLeave={e => this.onDragLeave(e)}
          onDragEnter={e => this.onDragEnter(e)}
          onDragEnd={e => this.onDragEnd(e)}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, true, "done")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Done</h4>
                  {done.map(task => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={e => this.onDragStart(e)}
                      onDragEnd={e => this.onDragEnd(e)}
                    >
                      <div className="img">
                        <img src={task.image} alt="box" />
                      </div>
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TaskList;
