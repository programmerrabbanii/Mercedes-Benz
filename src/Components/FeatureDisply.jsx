
const FeatureDisply = ({brandData}) => {
    const {description,image,title}=brandData
    return (
        <div>

<div className="card h-72 card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-full  w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
   
  </div>
</div>
            
        </div>
    );
};

export default FeatureDisply;