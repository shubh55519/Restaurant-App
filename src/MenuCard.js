
const MenuCard = ({ menu }) => {

    return (
        <>
            <section className="main-card--container">
                {menu.map((menuparameter) => {
                    const { id, name, category, image, description } = menuparameter;

                    return (
                        < div className="card-conatiner" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>

                                    <span className="card-author subtle"> {category}</span>

                                    <h2 className="card-title">{name}</h2>

                                    <span className="card-description subtle">
                                        {description}
                                    </span>

                                    <div className="card-read">Read</div>

                                </div>
                                <img src={image} alt="images" className="card-media" />

                                <span className="card-tag  subtle">Order Now</span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    );
}
export default MenuCard;
