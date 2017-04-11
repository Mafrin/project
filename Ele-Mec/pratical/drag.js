$(function () {
            $("#dvSource img").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                    if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                        alert(image + " dropped.");
                        if (image == "galvonameter.png" ){
                          $("#gVal").text("0.0");
                        }

                        if(image == "resisencebox.png"){
                          $("#rVal").removeAttr("disabled");
                        }

                        if(image == "ure.png"){
                            GvalueUpdate();

                            SvalueUpdate();
                        }
                    }
                    else {
                        alert(image + " not dropped.");
                    }
                }
            });
            $("#dvDest").droppable({
                drop: function (event, ui) {
                    if ($("#dvDest img").length == 0) {
                        $("#dvDest").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#dvDest").append(ui.draggable);
                }
            });


			$("#dvDest1").droppable({
                drop: function (event, ui) {
                    if ($("#dvDest1 img").length == 0) {
                        $("#dvDest1").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#dvDest1").append(ui.draggable);
                }
            });
			$("#galvonameter").droppable({
                drop: function (event, ui) {
                    if ($("#galvonameter img").length == 0) {
                        $("#galvonameter").html("");

                    }
                    ui.draggable.addClass("dropped");
                    $("#galvonameter").append(ui.draggable);

                }
            });
			$("#battery").droppable({
                drop: function (event, ui) {
                    if ($("#battery img").length == 0) {
                        $("#battery").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#battery").append(ui.draggable);
                }
            });

			$("#resience").droppable({
                drop: function (event, ui) {
                    if ($("#resience img").length == 0) {
                        $("#resience").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#resience").append(ui.draggable);
                }
            });


			$("#resisencebox").droppable({
                drop: function (event, ui) {
                    if ($("#resisencebox img").length == 0) {
                        $("#resisencebox").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#resisencebox").append(ui.draggable);
                }
            });

			$("#switch").droppable({
                drop: function (event, ui) {
                    if ($("#switch img").length == 0) {
                        $("#switch").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#switch").append(ui.draggable);
                }
            });

			$("#key").droppable({
                drop: function (event, ui) {
                    if ($("#key img").length == 0) {
                        $("#key").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#key").append(ui.draggable);
                }
            });

			$("#meterbox").droppable({
                drop: function (event, ui) {
                    if ($("#meterbox img").length == 0) {
                        $("#meterbox").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#meterbox").append(ui.draggable);
                }
            });

        });
