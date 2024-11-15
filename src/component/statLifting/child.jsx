

const Child = (props) => {
    const data = "i am from child"
    props.onChildData(data);
  return (
    <div>
        <p>Chlid</p>
        <p>{props.Data1}</p>
    </div>
  )
}

export default Child;