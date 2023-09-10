



function FooterImage ({img}) {
    if (img === "brand") {
        img = "src/assets/brand.png"
    } else if (img === "our story") {
        img = "src/assets/our_story.png"
    } else {
       return  "Invalid input"
        }


    return (
        <section>
            <img src={img} alt="image"/>
        </section>
    )
}

export default FooterImage