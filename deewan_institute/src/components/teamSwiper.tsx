import 'bootstrap';
import '../style/about.scss';
import { useEffect, useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';
import Swiper from 'swiper';

function TeamSwiper() {
    const swiperRef = useRef(null);
    const swiperInstance = useRef<Swiper | null>(null);

    useEffect(() => {
        // Initialize Swiper after component mounts
        swiperInstance.current = new Swiper('.teamSwiper', {
            direction: 'vertical',
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });

        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy(true, true);
            }
        };
    }, []);

    return (


        <Fragment>
            <div className="swiper teamSwiper">
                <div className="swiper-wrapper">
                    {/* <!-- 1 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/1.jpg"} alt="Mohammad" />
                            <h3 className="heading text-center mt-4">Mohammad</h3>
                            <h5 className="jobTitle text-center">Director & Founder</h5>
                        </div>
                    </div>
                    {/* <!-- 2 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/16.png"} alt="Ghayda" />
                            <h3 className="heading text-center mt-4">Ghayda</h3>
                            <h5 className="jobTitle text-center">Arabic Program Administrator</h5>
                        </div>
                    </div>
                    {/* <!-- 3 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/13.jpg"} alt="Raghad" />
                            <h3 className="heading text-center mt-4">Raghad</h3>
                            <h5 className="jobTitle text-center">Administrator</h5>
                        </div>
                    </div>
                    {/* <!-- 4 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/17.png"} alt="Mohammad" />
                            <h3 className="heading text-center mt-4">Ayah</h3>
                            <h5 className="jobTitle text-center">Program Coordinator</h5>
                        </div>
                    </div>
                    {/* <!-- 5 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/3.jpg"} alt="Ghayda" />
                            <h3 className="heading text-center mt-4">Nusaiba</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 6 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/4.jpg"} alt="Raghad" />
                            <h3 className="heading text-center mt-4">Huda</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 7 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/2.jpg"} alt="Mohammad" />
                            <h3 className="heading text-center mt-4">Malak</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 8 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/12.jpg"} alt="Ghayda" />
                            <h3 className="heading text-center mt-4">Raghad</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 9 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/11.jpg"} alt="Raghad" />
                            <h3 className="heading text-center mt-4">Rania</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 10 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/10.jpg"} alt="Mohammad" />
                            <h3 className="heading text-center mt-4">Tasneem</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 11 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/6.jpg"} alt="Ghayda" />
                            <h3 className="heading text-center mt-4">Noora</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 12 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/15.jpg"} alt="Raghad" />
                            <h3 className="heading text-center mt-4">Dalia</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 13 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/5.jpg"} alt="Mohammad" />
                            <h3 className="heading text-center mt-4">Mutaz</h3>
                            <h5 className="jobTitle text-center">Arabic Teacher</h5>
                        </div>
                    </div>
                    {/* <!-- 14 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/7.jpg"} alt="Ghayda" />
                            <h3 className="heading text-center mt-4">Deyaa</h3>
                            <h5 className="jobTitle text-center">Facility Manager</h5>
                        </div>
                    </div>
                    {/* <!-- 15 Team Member --> */}
                    <div className="swiper-slide">
                        <div className="d-flex flex-column align-items-center">
                            <img src={"../assets/images/teams/8.jpg"} alt="Raghad" />
                            <h3 className="heading text-center mt-4">Said</h3>
                            <h5 className="jobTitle text-center">Facility Manager</h5>
                        </div>
                    </div>
                </div>
                {/* <!-- Navigation arrows --> */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </Fragment>
    )
}

export default TeamSwiper;