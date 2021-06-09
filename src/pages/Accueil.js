import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import Panier from "../components/Panier";
import Produit from "../components/Produit";
import Layout from "../Layouts/Layout";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Accueil = ({ produits }) => {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state);
    console.log(state);
  };

  return (
    <Box>
      <Layout>
        <h1>Produits</h1>
        <Grid container spacing={3}>
          <Grid container xs={state && 10} sm={state && 10} spacing={3}>
            {produits.map((element) => {
              return (
                <>
                  <Grid item xs={6} sm={3}>
                    <Produit
                      toggleDrawer={() => toggleDrawer()}
                      produit={element}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid container xs={state && 2} sm={state && 2} spacing={1}>
            <Grid item spacing={1}>
              {state && <Panier />}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    produits: state.produits,
  };
};

export default connect(mapStateToProps)(Accueil);
