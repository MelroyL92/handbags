



function BagsCollection ({labelID, img, title, price}) {


    if (img === "bag1") {
        img = "src/assets/bag_1.png"
    } else if (img === "bag2") {
        img = "src/assets/bag_2.png"
    } else if (img === "bag3") {
        img = "src/assets/bag_3.png"
    } else if (img === "bag4") {
        img = "src/assets/bag_4.png"
    }

    return (
        <article>
            <span><label>{labelID}</label></span>
            <img src={img} alt="Bag picture"/>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>

    )
}

export default BagsCollection