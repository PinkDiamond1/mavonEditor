webpackJsonpmavon_editor([61],{416:function(e,n){e.exports=function(e){var n={className:"keyword",begin:"\\$(f[asn]|t|vp[rtd]|children)"},r={className:"literal",begin:"false|true|PI|undef"},s={className:"number",begin:"\\b\\d+(\\.\\d+)?(e-?\\d+)?",relevance:0},a=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),i={className:"meta",keywords:{"meta-keyword":"include use"},begin:"include|use <",end:">"},o={className:"params",begin:"\\(",end:"\\)",contains:["self",s,a,n,r]},t={begin:"[*!#%]",relevance:0},l={className:"function",beginKeywords:"module function",end:"\\=|\\{",contains:[o,e.UNDERSCORE_TITLE_MODE]};return{aliases:["scad"],keywords:{keyword:"function module include use for intersection_for if else \\%",literal:"false true PI undef",built_in:"circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,i,a,n,t,l]}}}});