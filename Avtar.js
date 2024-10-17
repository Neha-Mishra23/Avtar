const Avtar =({image,Name})=>{
    return(
        <div>
        <img
        src={image}
        height={200}
        width={200}
        style={{borderRadius:"50%"}}
        alt="Avtar"
        />

        <h3> Name : {Name}</h3>
        </div>
    );
};
export default Avtar;