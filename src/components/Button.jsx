 export default function Button({ name, variant, onclick }) {
  //let props = {name : "save", variant="btn btn-sucess"}
  //let {name, varaint} = props
  return (
   <div id="my-btn">
    <button
    onClick ={onclick}
     className={variant}>{name} </button>
   </div>
  );
}