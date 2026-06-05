import "./StudentCard.css";
function StudentCard(props){
  return(
    <div className="student-card">
      <h2>Name:{props.name}</h2>
      <h2>Course:{props.course}</h2>
      <h2>City:{props.city}</h2>
    </div>
  );
}
export default StudentCard;