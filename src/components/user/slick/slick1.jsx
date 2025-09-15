import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Button from "./Button";
export default function Slick1() {
    const settings = {
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="p-2" >
            <Slider {...settings}>
                <div className='me-1'>
                    <Button
                        name="Robotics"
                        detail="17 sản phẩm"
                        key={1}
                        classname="btn-primary"
                    />
                </div>
                <div>
                    <Button
                        name="Điện lạnh"
                        detail="17 sản phẩm"
                        key={2}
                        classname="btn-secondary"
                    />
                </div>
                <div>
                    <Button
                        name="Máy tính"
                        detail="17 sản phẩm"
                        key={1}
                        classname="btn-success"
                    />
                </div>
                <div>
                    <Button
                        name="Dụng cụ học tập"
                        detail="17 sản phẩm"
                        key={3}
                        classname="btn-danger"
                    />
                </div>

            </Slider>

        </div>
    )
}

