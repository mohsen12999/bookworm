import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./index.css";

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: "flex"
  // },
  // drawer: {
  //   [theme.breakpoints.up("sm")]: {
  //     flexShrink: 0
  //   }
  // },
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     // width: `calc(100% - ${drawerWidth}px)`,
  //     // marginLeft: drawerWidth
  //     zIndex: 1201
  //   }
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none"
  //   }
  // },
  // // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // drawerPaper: {
  //   width: drawerWidth
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3)
  // },
  // title: {
  //   flexGrow: 1,
  //   textAlign: "right",
  //   // marginRight: drawerWidth
  //   [theme.breakpoints.up("sm")]: {
  //     textAlign: "center",
  //     fontSize: "2rem"
  //   }
  // }
  // bidSlider: {
  //   background: "lightgray",
  //   display: "display",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "flex"
  //   }
  // },
  // image: {
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "50%"
  //   }
  // },
  // imageSpan: {
  //   flexGrow: "1",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   direction: "rtl"
  // }
  // search_div: {
  //   background: "lightgray",
  //   textAlign: "center",
  //   paddingTop: "2em",
  //   paddingBottom: "2em",
  //   direction: "rtl"
  // },
  // searchText: {
  //   //display: "block"
  //   width: "80%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "50%"
  //   }
  // },
  // searchBtn: {
  //   marginTop: "2rem"
  // },
  mainBanner: {
    // marginTop: "10px",
    // marginRight: "-14px",
    // marginLeft: "-14px",
    // background: "white"
  },
  searchText: {
    width: "98%"
  },
  grid_item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgSlider: {
    width: "100%"
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.mainBanner}>
        <img
          src="img/slider/slider1-skybook1-1368x599.jpg"
          className={classes.imgSlider}
          alt="img"
        />
      </div>
      <form className="search-grid persian-form">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} className={classes.grid_item}>
            <Typography variant="h5" component="h2">
              جستجوی کتاب
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.grid_item}>
            <TextField
              className={classes.searchText}
              id="standard-basic"
              variant="outlined"
              label="جستجوی عنوان کتاب، نویسنده یا موضوع"
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.grid_item}>
            <Button
              variant="contained"
              color="primary"
              className={classes.searchBtn}
              size="large"
              type="submit"
            >
              جستجو
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography paragraph style={{ marginTop: "2em" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>

      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </React.Fragment>
  );
};

export default Index;
