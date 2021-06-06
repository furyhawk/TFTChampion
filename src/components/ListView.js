import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
    flexGrow: 1
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
    }
    });

// function ListView({listItems}) {
//     return (
        const ListView = withStyles(styles)(({ classes, listItems }) => (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
            {listItems.length !== 0 ? (
                <div className={classes.root}>
                    <Grid container spacing={4}>
                <FlatList
                    data={listItems}
                    keyExtractor={item => item.championId.toString()}
                    renderItem={({ item }) => (
                        // <View style={styles.listItemContainer}>
                            
                        //     <View style={styles.listItemMetaContainer}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper className={classes.paper}>
                                <Text style={styles.itemTitle} numberOfLines={1}>
                                    {item.name}
                                </Text>
                                </Paper>
                            </Grid>
                        //     </View>
                        // </View>
                    )}
                />
                </Grid>
                </div>
            ) : (
                <Text style={{ fontSize: 30 }}>You list is empty :'(</Text>
            )
            }
        </View>
    ));
// }

export default ListView