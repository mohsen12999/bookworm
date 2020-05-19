import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import "./About.css";

const About = () => (
    <div className="about-page">
        <Typography variant="h5" component="h3" className="section-title">
            دربارۀ ما
        </Typography>
        <Typography paragraph>
            اعضای{" "}
            <a href="http://magiclight.ir" title="وب سایت تیم مجیک لایت">
                تیم مجیک لایت
            </a>
            ، در ابتدا تعدادی افراد عاشق بازی‌های کامپیوتری و فن‌آوری‌های مربوطه
            بودند، که اولین بار توی اولین دوره TGC (همایش بازی‌های رایانه‌ای
            تهران در سال 1396) با هم آشنا شدند و تصمیم گرفتند فقط یه بازی کننده
            خالی نباشند و بازی های مورد علاقه خودشان را بسازند.
        </Typography>
        <Typography paragraph>
            اعضای تیم فعالیت خودشان را با شرکت در کارگاه های آموزشی ساخت بازی
            شروع کردند و در ادامه در چند همایش و مسابقه ساخت بازی شرکت داشته و
            بازی های مختلفی را طراحی کرده، ساختند و به طور رایگان در دسترس
            علاقه‌مندان قرار دادند.
        </Typography>
        <Typography paragraph>
            در ادامه اعضای تیم به این نتیجه رسیدند که فعالیت خود را محدود به
            حوزه بازی نکنند و در موضوعات و زمینه‌های مورد علاقه مشترک به فعالیت
            بپردازند. این نرم افزار حاصل یکی از همین تلاش ها هست. با ایده ای از
            امیرسالار سلیمانی.
        </Typography>
        <Typography variant="h5" component="h3" className="section-title">
            اعضای تیم
        </Typography>

        <Grid className="team-member-grid" container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className="card-img"
                            image="/images/user/amir.jpg"
                            title="Amir Salar Soleymani"
                        />
                        <CardContent className="card-content">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                امیر سالار سلیمانی
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                مدیر تیم، طراح و بازی ساز
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-action">
                        <Button
                            size="small"
                            color="primary"
                            href="https://www.linkedin.com/in/amirsalar-solimani-8b3376123/"
                            target="_blank"
                        >
                            Linkdin
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className="card-img"
                            image="/images/user/hosein.jpg"
                            title="Hosein farahani"
                        />
                        <CardContent className="card-content">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                حسین فراهانی
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                برنامه نویس و بازی ساز
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-action">
                        <Button
                            size="small"
                            color="primary"
                            href="https://www.linkedin.com/"
                            target="_blank"
                        >
                            Linkdin
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className="card-img"
                            image="/images/user/mohsen.jpg"
                            title="Mohsen Shabanian"
                        />
                        <CardContent className="card-content">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                محسن شعبانیان
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                برنامه نویس و بازی ساز
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-action">
                        <Button
                            size="small"
                            color="primary"
                            href="https://www.linkedin.com/in/mohsen-shabanian-8869b478/"
                            target="_blank"
                        >
                            Linkdin
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default About;
