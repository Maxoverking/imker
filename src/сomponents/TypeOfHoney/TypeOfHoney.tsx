import styles from "./TypeOfHoney.module.css";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function TypeOfHoney(): JSX.Element {
    return (
        <>
            <div className={styles.type_main_container}>
                <div className={styles.tile_background}>
                    <img src="/img/body_left.png"/>
                </div>
                <Container>
                    <h2 className={styles.main_honey_title}>HONIGSORTEN</h2>
                    <h4>Erfahren Sie mehr über einige der Produkte, auf die wir besonders stolz sind.</h4>
                    <Row>
                        <Col>
                            <Link to="posts/9">
                            <div className={styles.tile_main + " animate__animated animate__fadeInUp"}>
                                <div className={styles.tile_img}>
                                    <img src="/img/tile/tile_1.png"/>
                                </div>
                                <div className={styles.tile_texts}>
                                    <div className={styles.tile_title}>
                                        <p>Honig aus dem Wald</p>
                                    </div>
                                    <div className={styles.tile_text}>
                                        <p>Waldhonig ist sehr gesund. Ugo sollte verwendet werden, wenn Sie Kopfschmerzen haben</p>
                                    </div>
                                    <div className={styles.tile_link}>
                                        <p>
                                            Mehr lesen
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="posts/9">
                            <div className={styles.tile_main + " animate__animated animate__fadeInUp"}>
                                <div className={styles.tile_img}>
                                    <img src="/img/tile/tile_2.png"/>
                                </div>
                                <div className={styles.tile_texts}>
                                    <div className={styles.tile_title}>
                                        <p>Natürlicher Honig</p>
                                    </div>
                                    <div className={styles.tile_text}>
                                        <p>Waldhonig ist sehr gesund. Ugo sollte verwendet werden, wenn Sie Kopfschmerzen haben</p>
                                    </div>
                                    <div className={styles.tile_link}>
                                        <p>
                                           Mehr lesen
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="posts/9">
                            <div className={styles.tile_main + " animate__animated animate__fadeInUp"}>
                                <div className={styles.tile_img}>
                                    <img src="/img/tile/tile_3.png"/>
                                </div>
                                <div className={styles.tile_texts}>
                                    <div className={styles.tile_title}>
                                        <p>Gesunder Honig</p>
                                    </div>
                                    <div className={styles.tile_text}>
                                        <p>Waldhonig ist sehr gesund. Ugo sollte verwendet werden, wenn Sie Kopfschmerzen haben</p>
                                    </div>
                                    <div className={styles.tile_link}>
                                        <p>
                                            Mehr lesen
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="posts/9">
                            <div className={styles.tile_main + " animate__animated animate__fadeInUp"}>
                                <div className={styles.tile_img}>
                                    <img src="/img/tile/tile_4.png"/>
                                </div>
                                <div className={styles.tile_texts}>
                                    <div className={styles.tile_title}>
                                        <p>Organischer Honig</p>
                                    </div>
                                    <div className={styles.tile_text}>
                                        <p>Waldhonig ist sehr gesund. Ugo sollte verwendet werden, wenn Sie Kopfschmerzen haben</p>
                                    </div>
                                    <div className={styles.tile_link}>
                                        <p>
                                           Mehr lesen
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
