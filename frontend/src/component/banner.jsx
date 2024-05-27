import SelectCatagory from "./selectCategory";

const title = <h2>Search Your One From <span style={ {"color": "#55ACEE"} }>150+</span> Online Courses</h2>;

const Banner = () => {
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectCatagory select={'all'} />
                        <input type="text" name="search" placeholder="Search your theme" />
                        <button type="submit"><i className="icofont-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;