webpackJsonpmavon_editor([65],{412:function(e,n){e.exports=function(e){var n={keyword:"rec with let in inherit assert if else then",literal:"true false or and null",built_in:"import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"},i={className:"subst",begin:/\$\{/,end:/}/,keywords:n},t={begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/}]},s={className:"string",contains:[i],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},a=[e.NUMBER_MODE,e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,t];return i.contains=a,{aliases:["nixos"],keywords:n,contains:a}}}});