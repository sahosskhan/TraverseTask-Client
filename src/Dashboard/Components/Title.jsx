

// eslint-disable-next-line react/prop-types
const Title = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const { image, name } = items;

    // eslint-disable-next-line react/prop-types
    const slicedName = name.slice(0, 15);
    console.log(slicedName);

console.log(slicedName);
    return (
        <div className=" flex lg:flex-col flex-row justify-center items-center gap-4">
              <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src={image} alt=""/>
            <h1 className="text-white text-lg text-center">{slicedName}</h1>
        </div>
    );
};

export default Title;