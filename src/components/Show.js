import "./Show.css";

const Show = ({ data }) => {
    if (Array.isArray(data.data)) {
        return (
            <div className="image-grid">
                {data.data.map((curr, key) => {
                    return (
                        <div key={key} className="product">
                            <img src={curr.imageUrl} alt="fashion" />
                            <div className="flex">
                                {curr.productName ? (
                                    <h5 className="inline">
                                        {curr.productName}
                                    </h5>
                                ) : (
                                    <></>
                                )}
                                {curr.price ? (
                                    <h5 className="inline">{curr.price}</h5>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Show;
