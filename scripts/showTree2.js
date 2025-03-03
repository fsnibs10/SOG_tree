/*------------Script commands------------*/
/**************************************************************************************************************************/
// let d3js_Script = document.createElement("script");
    // d3js_Script.setAttribute("src","http://d3js.org/d3.v3.min.js");
    // document.getElementById("treeHTML").appendChild(d3js_Script);
    
    // let netdna_Script = document.createElement("script");
    // netdna_Script.setAttribute("src","http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js");
    // document.getElementById("treeHTML").appendChild(netdna_Script);
    
    // let cdnjs_Script = document.createElement("script");
    // cdnjs_Script.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js");
    // document.getElementById("treeHTML").appendChild(cdnjs_Script);
    // let bootstrap_CSS = document.createElement("link");
    // bootstrap_CSS.setAttribute("rel","stylesheet");
    // bootstrap_CSS.setAttribute("href","scripts/phylotree.css");
    // document.getElementById("treeHTML").appendChild(bootstrap_CSS);
/*------------functions------------*/
/**************************************************************************************************************************/

function addTreeInfo(){
	const sf_html = window.location.search;
	const sf_id = sf_html.substring(1); 
    let treeFileAddress = "/TREE/" + sf_id + ".nwk";
    let temp1 = $.ajax({url:treeFileAddress, async: false});
    tree  = temp1.responseText.split(/;/)[0];
    return tree;
}
function showTree(sf_id){

    let netdna_CSS_V4 = document.createElement("link");
    netdna_CSS_V4.setAttribute("rel","stylesheet");
    netdna_CSS_V4.setAttribute("href","http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
    document.getElementById("treeHTML").appendChild(netdna_CSS_V4);
    
    let netdna_CSS_V3 = document.createElement("link");
    netdna_CSS_V3.setAttribute("rel","stylesheet");
    netdna_CSS_V3.setAttribute("href","http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css");
    document.getElementById("treeHTML").appendChild(netdna_CSS_V3);
    
    //document.getElementById("geneTable").removeChild(document.getElementById("geneFamiliesTable"));
    document.getElementById("treeHTML").style.visibility = "visible";
    window.scroll(0,0);
 
    var pombe_tree = addTreeInfo();
    var res = d3.layout.newick_parser(pombe_tree);
    default_tree_settings ();
    tree.node_circle_size (0);
    tree.radial (true);
    //tree.options ({'top-bottom-spacing' : 'fit-to-size'}, false);
    //tree.options ({'left-right-spacing' : 'fit-to-size'}, false);
    //tree.size ([1500,1500]);
    tree (res).svg (svg).layout();
    update_controls ();
}

/**************************************************************************************************************************/
