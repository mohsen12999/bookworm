import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

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
  bidSlider: {
    background: "lightgray",
    display: "display",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  image: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  },
  imageSpan: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: "rtl"
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.bidSlider}>
        <img
          src="/img/slider/slider-book.png"
          className={classes.image}
          alt=""
        />
        <div className={classes.imageSpan}>
          <div>
            <Typography variant="h3">عنوان کتاب</Typography>
            <Typography paragraph>کتاب جدید نویسنده محبوب</Typography>
          </div>
        </div>
      </div>

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
