$(document).ready(function () {
	//auto and live completion 
	ace.require("ace/ext/language_tools");
        editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true
        });
	//end

	//disables vertical line in ace editor
	editor.setOption("showPrintMargin", false);


	var the = localStorage.getItem('theme');
	if( the == null || the == 'light' ) {
		loadLight();
	} else {
		loadDark();
	}

	$( ".theme" ).click( function() {
		if( $(this).text() == 'Light' ) {
			loadLight();
		} else if( $(this).text() == 'Dark' ) {
			loadDark();
		}
	});

	function loadLight() {
		localStorage.setItem( 'theme', 'light' );
		$( "body" ).css( "background-image", "url( 'http://d21fyo3u79zv4o.cloudfront.net/images/concrete.png' )" );
		$( ".gb" ).css( "background-color", "" ); //gray back
		$( ".wf" ).css( "color", "" ); //white fore
		$( ".bb" ).css( "background-color", "" ); //black back
		$( ".g-recaptcha" ).attr( "data-theme", "light" );
		$( ".jumbotron" ).css( "background-color", "" );

		if( editor != null ) {
			editor.setTheme("ace/theme/chrome");
		}
	}

	function loadDark() {
		localStorage.setItem( 'theme', 'dark' );
		$( "body" ).css( "background-image", "url( 'http://d21fyo3u79zv4o.cloudfront.net/images/dark.png' )" );
		$( ".gb" ).css( "background-color", "#2F2F2F" ); //gray back
		$( ".wf" ).css( "color", "#FFFFFF" ); //white fore
		$( ".bb" ).css( "background-color", "#000000" ); //black back
		$( ".g-recaptcha" ).attr( "data-theme", "dark" );
		$( ".jumbotron" ).css( "background-color", "#2A2A2A" );

		if( editor != null ) {
			editor.setTheme("ace/theme/vibrant_ink");
		}
	}


	if( editor == null ) {
		return;
	}
	editor.focus();
	$(window).unload( function() {
		localStorage.setItem( 'code', editor.session.getValue() );
		localStorage.setItem( 'lang', language );
	});

	var norOps = {
		minLines: 25,
		maxLines: null,
		fontSize: "12pt"
	};

	var fullOps = {
		minLines: null,
		maxLines: null
	};

	editor.setOptions( norOps );

	function toggleFullScreen() {
		var elem = document.getElementById("editor");
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	}
	$( "#full" ).click( function() {
		toggleFullScreen();
	});
	$(".ace_editor").keydown(function(e) {
		if( e.which == 122 || ( e.which == 27 && $( "body" ).hasClass( "fullScreen" ) ) ) {
			toggleFullScreen();
			e.preventDefault();
		}
    });

	var defaultC = '#include <stdio.h>\n\nint main() {\n\t//code\n\treturn 0;\n}';
    var defaultCPP = '#include <iostream>\nusing namespace std;\n\nint main() {\n\t//code\n\treturn 0;\n}';
    var defaultJava = 'import java.io.*;\n\nclass GFG {\n\tpublic static void main (String[] args) {\n\t\t//code\n\t}\n}';
    var defaultPython = '#code';
    var defaultCs='using System;\n\npublic class GFG{\n\tstatic public void Main (){\n\t\t//Code\n\t}\n}';
    var defaultScala='object Main {\n\tdef main(args: Array[String]) {\n\t\t//Code\n\t}\n}';
    var defaultPerl='#!/usr/bin/perl\n# your code here\n';
    var defaultPhp='<?php\n\t//code\n?>';

	function insertTemplate() {
		var text = editor.session.getValue();
		if( language == 'C' ) {
                        editor.session.setMode("ace/mode/c_cpp");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultC );
                        }
                } else if( language == 'Cpp' || language=='Cpp14' ) {
                        editor.session.setMode("ace/mode/c_cpp");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultCPP );
                        }
                } else if( language == 'Java' ) {
                        editor.session.setMode("ace/mode/java");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultJava );
                        }
                } else if( language == 'Python' || language == 'Python3' ) {
                        editor.session.setMode("ace/mode/python");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultPython );
                        }
                } else if( language == 'Csharp') {
                        editor.session.setMode("ace/mode/csharp");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultCs);
                        }
                } else if( language == 'Scala') {
                        editor.session.setMode("ace/mode/scala");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultScala);
                        }
                } else if( language == 'Perl') {
                        editor.session.setMode("ace/mode/perl");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultPerl);
                        }
                } else if( language == 'Php') {
                        editor.session.setMode("ace/mode/php");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultPhp);
                        }
                }
	}

	var storedCode = localStorage.getItem( 'code' );
	var text = editor.session.getValue();
	if( storedCode ) {
		 if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultPerl || 
			text==defaultPhp || text==defaultScala) {
			editor.session.setValue( storedCode );
			language = localStorage.getItem( 'lang' );
		}
	}
	insertTemplate();
	$("[l="+language+"]").css("background-color", "#39B54A");
	$("[l="+language+"]").css("color", "#000000");

	$(".lang").click(function(){
		language = $(this).attr('l');
		$(".lang").css("background-color", "#ffffff" );
		$(".lang").css("color", "#000000");
		$(this).css("background-color", "#39B54A");
		$(this).css("color", "#000000");
		insertTemplate();
	});

	function getExtension() {
		if( language == 'C' )		return 'c';
		if( language == 'Cpp' || language == 'Cpp14' )	return 'cpp';
		if( language == 'Java' )	return 'java';
		if( language == 'Python' || language == 'Python3' )	return 'py';
		if( language == 'Scala' ) return 'scala';
		if( language == 'Php' ) return 'php';
		if( language == 'Perl') return 'perl';
		if( language == 'Csharp') return 'cs';
	}
	$( "#savefile" ).click( function() {
		var saver = document.createElement('a');
		saver.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(editor.getSession().getValue()));
		saver.setAttribute('download', 'code.' + getExtension() );
		saver.style.display = 'none';
		document.body.appendChild(saver);
		saver.click();
		document.body.removeChild(saver);
		return false;
	});

	$("#reset").click(function() {
		editor.getSession().setValue('');
		insertTemplate();
		return false;
	});

	$("#run").click(function() {
		$(this).attr( "disabled", "disabled" );
		$("html, body").animate({ scrollBottom: $(document).height() }, "slow");
		$( ".cmp" ).hide();
		$( ".rnt" ).hide();
		$( ".out" ).hide();
		$( "#linkDiv" ).hide();
		$.ajax({
			type: "POST",
			url: 'main.php',
			data: { lang: language, code: editor.getSession().getValue(), input: $( "#input" ).val(), save: false },
			dataType: "json",
			success: function( data ) {
				if( data.rntError != "" && data.rntError != null ) {
					$( ".rnt" ).show();
					$( ".rnt pre" ).text( data.rntError );
				}
				if( data.cmpError != "" && data.cmpError != null  ) {
					$( ".cmp" ).show();
					$( ".cmp pre" ).text( data.cmpError );
				}
				$( ".out" ).show();
				if( data.output != "" && data.output != null ) {
					$( ".out pre" ).text( data.output );
				} else {
					$( ".out pre" ).text( 'No Output' );
				}
				$("html, body").animate({ scrollTop: $(".sbt-group").offset().top + 60 }, "slow");
			},
			error: function(jqXHR, exception, errorThrown) {
	            $( ".err" ).show().delay(5000).slideUp(200, function() {
					$(this).hide();
				});
			},
			complete: function() {
				$("#run").removeAttr( "disabled" );
			}
		});
		return false;
	});
	$("#runurl").click(function() {
		$(this).attr( "disabled", "disabled" );
		$("html, body").animate({ scrollBottom: $(document).height() }, "slow");
		$( ".cmp" ).hide();
		$( ".rnt" ).hide();
		$( ".out" ).hide();
		$( "#linkDiv" ).hide();
		$.ajax({
			type: "POST",
			url: 'main.php',
			data: { lang: language, code: editor.getSession().getValue(), input: $( "#input" ).val(), save: true },
			dataType: "json",
			success: function( data ) {
				if( data.id ) {
					var permaLink = 'http://code.geeksforgeeks.org/' + data.id;
					$( ".url pre" ).text( permaLink );
					$( ".url" ).show();
					history.pushState( null, "", permaLink );
				}
				if( data.rntError != "" && data.rntError != null ) {
					$( ".rnt" ).show();
					$( ".rnt pre" ).text( data.rntError );
				}
				if( data.cmpError != "" && data.cmpError != null  ) {
					$( ".cmp" ).show();
					$( ".cmp pre" ).text( data.cmpError );
				}
				$( ".out" ).show();
				if( data.output != "" && data.output != null ) {
					$( ".out pre" ).text( data.output );
				} else {
					$( ".out pre" ).text( 'No Output' );
				}
				$("html, body").animate({ scrollTop: $(".sbt-group").offset().top + 60 }, "slow");
			},
			error: function(jqXHR, exception, errorThrown) {
	            $( ".err" ).show().delay(5000).slideUp(200, function() {
					$(this).hide();
				});
			},
			complete: function() {
				$("#runurl").removeAttr( "disabled" );
			}
		});
		return false;
	});

	//copy to clipboard section
	//copy code from editor
	var clipboard=new Clipboard('.btnEditor', {
		text:function() {
			return editor.session.getValue();
		}
	});
	//change copy to copied for 2 secs
	clipboard.on('success',function(event){
                event.clearSelection();
                event.trigger.textContent='Copied';
                window.setTimeout(function(){
                        event.trigger.textContent='Copy';
                },2000);
        });
	
	//copy input
	var clipboard=new Clipboard('.btnInput', {
                text:function() {
                        return document.getElementById('input').value;
                }
        });
	
	clipboard.on('success',function(event){
                event.clearSelection();
                event.trigger.textContent='Copied';
                window.setTimeout(function(){
                        event.trigger.textContent='Copy';
                },2000);
        });
	
	//copy output
	var clipboard=new Clipboard('.btnOutput', {
                text:function() {
                        return document.getElementById('preOutput').innerHTML;
                }
        });
	
	clipboard.on('success',function(event){
                event.clearSelection();
                event.trigger.textContent='Copied';
                window.setTimeout(function(){
                        event.trigger.textContent='Copy';
                },2000);
        });
	
	//copy link
	var clipboard=new Clipboard('.btnLink', {
                text:function() {
                        return document.getElementById('preLink').innerHTML;
                }
        });

	clipboard.on('success',function(event){
		event.clearSelection();
		event.trigger.textContent='Copied';
		window.setTimeout(function(){
			event.trigger.textContent='Copy';
		},2000);
	});
});
