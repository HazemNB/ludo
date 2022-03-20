import React from 'react';
import $ from 'jquery';
import "../../Css/LudoGame/dice.css"
import "../../Css/LudoGame/main.css"


import { useEffect } from 'react';

const Main = () => {

    useEffect(() => {
        const timer = document.getElementById('watch');
        var hr = 0;
        var min = 0;
        var sec = 0;
        var stoptime = true;

        function startTimer() {
            if (stoptime == true) {
                stoptime = false;
                timerCycle();
            }
        }
        function stopTimer() {
            if (stoptime == false) {
                stoptime = true;
            }
        }

        function timerCycle() {
            if (rank_count > 2) {
                stopTimer();

            }
            if (stoptime == false) {
                sec = parseInt(sec);
                min = parseInt(min);
                hr = parseInt(hr);

                sec = sec + 1;

                if (sec == 60) {
                    min = min + 1;
                    sec = 0;
                }
                if (min == 60) {
                    hr = hr + 1;
                    min = 0;
                    sec = 0;
                }

                if (sec < 10 || sec == 0) {
                    sec = '0' + sec;
                }
                if (min < 10 || min == 0) {
                    min = '0' + min;
                }
                if (hr < 10 || hr == 0) {
                    hr = '0' + hr;
                }

                timer.innerHTML = hr + ':' + min + ':' + sec;

                setTimeout("timerCycle()", watchsec);
            }
        }

        function resetTimer() {
            timer.innerHTML = '00:00:00';
        }
        var watchsec = 1000;

        var red_player_1 = {
            color: "red",
            player: `<div class="player bg-red movered1" id="red-player-1"></div>`,
            path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".red-home",


            controller: "#movered1",
        }

        var red_player_2 = {
            color: "red",

            player: `<div class="player bg-red movered2" id="red-player-2"></div>`,

            path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".red-home",
            controller: "#movered2",
        }

        var red_player_3 = {
            color: "red",

            player: `<div class="player bg-red movered3" id="red-player-3"></div>`,
            path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".red-home",
            controller: "#movered3",
        }

        var red_player_4 = {
            color: "red",

            player: `<div class="player bg-red movered4" id="red-player-4"></div>`,
            path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".red-home",
            controller: "#movered4",
        }


        var green_player_1 = {
            color: "green",

            player: `<div class="player bg-green movegreen1" id="green-player-1"></div>`,
            path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".green-home",
            controller: "#movegreen1",
        }
        var green_player_2 = {
            color: "green",

            player: `<div class="player bg-green movegreen2" id="green-player-2"></div>`,
            path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".green-home",
            controller: "#movegreen2",
        }

        var green_player_3 = {
            color: "green",

            player: `<div class="player bg-green movegreen3" id="green-player-3"></div>`,
            path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".green-home",
            controller: "#movegreen3",
        }

        var green_player_4 = {
            color: "green",

            player: `<div class="player bg-green movegreen4" id="green-player-4"></div>`,
            path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".green-home",
            controller: "#movegreen4",
        }


        var blue_player_1 = {
            color: "blue",

            player: `<div class="player bg-blue moveblue1" id="blue-player-1"></div>`,
            path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".blue-home",
            controller: "#moveblue1",
        }
        var blue_player_2 = {
            color: "blue",

            player: `<div class="player bg-blue moveblue2" id="blue-player-2"></div>`,
            path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".blue-home",
            controller: "#moveblue2",
        }

        var blue_player_3 = {
            color: "blue",

            player: `<div class="player bg-blue moveblue3" id="blue-player-3"></div>`,
            path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".blue-home",
            controller: "#moveblue3",
        }

        var blue_player_4 = {
            color: "blue",

            player: `<div class="player bg-blue moveblue4" id="blue-player-4"></div>`,
            path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".blue-home",
            controller: "#moveblue4",
        }

        var yellow_player_1 = {
            color: "yellow",

            player: `<div class="player bg-yellow moveyellow1" id="yellow-player-1"></div>`,
            path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".yellow-home",
            controller: "#moveyellow1",
        }
        var yellow_player_2 = {
            color: "yellow",

            player: `<div class="player bg-yellow moveyellow2" id="yellow-player-2"></div>`,
            path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".yellow-home",
            controller: "#moveyellow2",
        }
        var yellow_player_3 = {
            color: "yellow",

            player: `<div class="player bg-yellow moveyellow3" id="yellow-player-3"></div>`,
            path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".yellow-home",
            controller: "#moveyellow3",
        }



        var yellow_player_4 = {
            color: "yellow",

            player: `<div class="player bg-yellow moveyellow4" id="yellow-player-4"></div>`,
            path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
            current_position: 0,
            status: 'home',
            current_step: null,
            resetplayer: function () {
                this.current_position = 0;
                this.status = "home";
                this.previous_step = null;
            },
            previous_step: null,
            home: ".yellow-home",
            controller: "#moveyellow4",
        }


        var player_list = {
            "red-player-1": red_player_1,
            "red-player-2": red_player_2,
            "red-player-3": red_player_3,
            "red-player-4": red_player_4,
            "green-player-1": green_player_1,
            "green-player-2": green_player_2,
            "green-player-3": green_player_3,
            "green-player-4": green_player_4,
            "yellow-player-1": yellow_player_1,
            "yellow-player-2": yellow_player_2,
            "yellow-player-3": yellow_player_3,
            "yellow-player-4": yellow_player_4,
            "blue-player-1": blue_player_1,
            "blue-player-2": blue_player_2,
            "blue-player-3": blue_player_3,
            "blue-player-4": blue_player_4,

        }

        var intervalId = "";
        function start_autorun() {

            intervalId = window.setInterval(function () {
                if (rank_count > 2) {
                    clearInterval(intervalId);
                    return 0;
                }
                if (bot[current_turn.group.toLocaleLowerCase()]) {
                    autorun();

                } else {
                    clearInterval(intervalId);

                }
            }, hold_time);
        }




        function autorun() {
            // startTimer();
            if (isPlayerIsMoving) {
                return 0;
            }


            $("#dice").trigger("click");
            hold(hold_time).then(() => {

                for (let i = 0; i < 4; i++) {
                    if (current_turn.players[i].current_position + dice_value <= current_turn.players[i].path.length) {
                        $(current_turn.players[i].controller).trigger("click");
                        break;

                    }


                }





            });


        }





        var steps = document.getElementsByClassName("step");
        // for(i=0;i<steps.length;i++){
        //     steps[i].innerText=i;
        // }
        var init_r = false;

        $(document).keydown((e) => {
            //  console.log(e.keyCode)
            if (e.keyCode == 32 || e.keyCode == 13) {
                $("#dice").trigger("click");
            }
            if (e.keyCode == 35 || e.keyCode == 49) {
                $(current_turn.players[0].controller).trigger("click");
            }
            if (e.keyCode == 40 || e.keyCode == 50) {
                $(current_turn.players[1].controller).trigger("click");
            }
            if (e.keyCode == 34 || e.keyCode == 51) {
                $(current_turn.players[2].controller).trigger("click");
            }
            if (e.keyCode == 37 || e.keyCode == 52) {
                $(current_turn.players[3].controller).trigger("click");
            }
        });

        var step_sound = new Audio('assets/audio/step.mp3');
        var dead_sound = new Audio('assets/audio/dead.mp3');
        var inout_sound = new Audio('assets/audio/inout.mp3');
        var dice_sound = new Audio('assets/audio/dice.mp3');
        var winner_sound = new Audio('assets/audio/winner.mp3');


        var safe_stops = [19, 6, 5, 27, 52, 65, 66, 44];
        var hold_time = 350;
        var move_time = 300;

        var names = {
            red_player_name: null,
            green_player_name: null,
            blue_player_name: null,
            yellow_player_name: null,
        }


        var bot = {
            red: false,
            blue: false,
            green: false,
            yellow: false,
        }



        $("#red_player_name .bot").click(() => {
            $("#red_player_name .bot").toggleClass("botoff");
            $("#red_player_name .bot").toggleClass("boton");
            bot.red = !bot.red;
            $("#red_player_name .cun").attr("disabled", bot.red);
            if (bot.red) {
                $("#red_player_name .cun").val("Botred");
            } else {
                $("#red_player_name .cun").val("");

            }
        });

        $("#green_player_name .bot").click(() => {
            $("#green_player_name .bot").toggleClass("botoff");
            $("#green_player_name .bot").toggleClass("boton");
            bot.green = !bot.green;
            $("#green_player_name .cun").attr("disabled", bot.green);
            if (bot.green) {
                $("#green_player_name .cun").val("Botgreen");
            } else {
                $("#green_player_name .cun").val("");

            }
        });


        $("#blue_player_name .bot").click(() => {
            $("#blue_player_name .bot").toggleClass("botoff");
            $("#blue_player_name .bot").toggleClass("boton");
            bot.blue = !bot.blue;
            $("#blue_player_name .cun").attr("disabled", bot.blue);
            if (bot.blue) {
                $("#blue_player_name .cun").val("Botblue");
            } else {
                $("#blue_player_name .cun").val("");

            }
        });
        $("#yellow_player_name .bot").click(() => {
            $("#yellow_player_name .bot").toggleClass("botoff");
            $("#yellow_player_name .bot").toggleClass("boton");
            bot.yellow = !bot.yellow;
            $("#yellow_player_name .cun").attr("disabled", bot.yellow);

            if (bot.yellow) {
                $("#yellow_player_name .cun").val("Botyellow");
            } else {
                $("#yellow_player_name .cun").val("");

            }
        });

        $("#start_btn").click(() => {
            if (init_r) {
                return 0;
            }
            names.red_player_name = $("#red_player_name .cun").val();
            names.green_player_name = $("#green_player_name .cun").val();
            names.yellow_player_name = $("#yellow_player_name .cun").val();
            names.blue_player_name = $("#blue_player_name .cun").val();
            var ap = 0;
            var b = 0;
            if (checku('red')) ap++;
            if (checku('green')) ap++;
            if (checku('yellow')) ap++;
            if (checku('blue')) ap++;

            if (bot['red']) b++;
            if (bot['green']) b++;
            if (bot['yellow']) b++;
            if (bot['blue']) b++;

            if (ap > 1 && b < ap) {
                init();
                $(".rc_name").text(names.red_player_name);
                $(".gc_name").text(names.green_player_name);
                $(".yc_name").text(names.yellow_player_name);
                $(".bc_name").text(names.blue_player_name);
                start_autorun();
                $(".welcome").hide();

            } else {
                console.log("noooo");
            }

        });

        function checku(u) {
            var ret = false;
            if (bot[u]) {
                ret = true;
            }
            if (!bot[u] && names[u + "_player_name"] != null && names[u + "_player_name"] != "") {
                ret = true;

            }

            return ret;
        }



        var rank_count = 0;
        var six_count = 0;
        var to_
        var turn_oder_lobby = [
            { group: 'RED', rank: 0, players: [red_player_1, red_player_2, red_player_3, red_player_4] },
            { group: 'GREEN', rank: 0, players: [green_player_1, green_player_2, green_player_3, green_player_4] },

            { group: 'YELLOW', rank: 0, players: [yellow_player_1, yellow_player_2, yellow_player_3, yellow_player_4] },
            { group: 'BLUE', rank: 0, players: [blue_player_1, blue_player_2, blue_player_3, blue_player_4] },
        ];

        var turn_oder = [];
        var current_turn_index = 0;
        var current_turn = turn_oder[current_turn_index];
        var dice_value = 0;

        function init() {
            init_r = true;
            if (checku('red')) {
                $(".red-home .white-box .player-room").append(red_player_1.player + red_player_2.player + red_player_3.player + red_player_4.player);
                turn_oder.push(turn_oder_lobby[0]);
            }
            if (checku('green')) {
                $(".green-home .white-box .player-room").append(green_player_1.player + green_player_2.player + green_player_3.player + green_player_4.player);
                turn_oder.push(turn_oder_lobby[1]);
            }
            if (checku('yellow')) {
                $(".yellow-home .white-box .player-room").append(yellow_player_1.player + yellow_player_2.player + yellow_player_3.player + yellow_player_4.player);
                turn_oder.push(turn_oder_lobby[2]);
            }
            if (checku('blue')) {
                $(".blue-home .white-box .player-room").append(blue_player_1.player + blue_player_2.player + blue_player_3.player + blue_player_4.player);
                turn_oder.push(turn_oder_lobby[3]);
            }

            // $(".winner-home .rwh").append($(".red-home .white-box .player-room").html());
            // $(".winner-home .gwh").append($(".green-home .white-box .player-room").html());
            // $(".winner-home .bwh").append($(".blue-home .white-box .player-room").html());
            // $(".winner-home .ywh").append($(".yellow-home .white-box .player-room").html());

            updateTurn(current_turn_index);


        }



        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }





        $("#dice").click(function () {
            if (stoptime) {
                startTimer();
            }
            if (dice_value != 0) {
                return false;
            }
            if (rank_count > (turn_oder.length - 2)) {
                deactivateDice();

                return false;
            }
            dice_value = Math.random() * (7 - 1) + 1;
            dice_value = Math.floor(dice_value);
            // dice_value=2;
            // $("#dice").text(dice_value);
            deactivateDice();

            if (dice_value == 6) {
                six_count++;
            } else {
                six_count = 0;
            }
            // console.log("Dice : ",dice_value);
            dice_sound.play();
            if (getActivePlayers(current_turn.players[0].home) == 0 && dice_value != 6) {
                console.log(current_turn.group + " : no player is active , shifting turn to next player");
                hold(hold_time).then(() => {
                    updateTurn(++current_turn_index);
                    activateDice();
                });

            } else if (!getHomePlayers(current_turn.players[0].home) && getActivePlayers(current_turn.players[0].home) == 0 && dice_value == 6) {
                console.log(current_turn.group + " : you can't use this dice value, so shifting turn to next player");
                hold(hold_time).then(() => {
                    updateTurn(++current_turn_index);
                    activateDice();
                });
            } else if (getActivePlayers(current_turn.players[0].home) == 1 && dice_value < 6) {
                console.log(current_turn.group + " : you only have 1 active player so moving automatically");

                hold(hold_time).then(() => {
                    for (let i = 0; i < 4; i++) {
                        if (current_turn.players[i].status == 'active') {
                            $(current_turn.players[i].controller + '').trigger("click");
                        }
                    }
                });

            } else if (getActivePlayers(current_turn.players[0].home) == 1 && getHomePlayers(current_turn.players[0].home) == 0 && dice_value == 6) {
                console.log(current_turn.group + " : you only have 1 active player so moving automatically");

                hold(hold_time).then(() => {
                    for (let i = 0; i < 4; i++) {
                        if (current_turn.players[i].status == 'active') {
                            $(current_turn.players[i].controller + '').trigger("click");
                        }
                    }
                });

            } else if (getHomePlayers(current_turn.players[0].home) == 1 && getActivePlayers(current_turn.players[0].home) == 0 && dice_value == 6) {
                console.log(current_turn.group + " : you got 6 but , you don't have any active players and only 1 player in home so making it active");
                hold(hold_time).then(() => {
                    for (let i = 0; i < 4; i++) {
                        if (current_turn.players[i].status == 'home') {
                            $(current_turn.players[i].controller + '').trigger("click");
                        }
                    }
                });

            }

            //     if(getActivePlayers(current_turn.players[0].home)==0 && dice_value!=6){
            //         ////console.log("no "+current_turn.group+" players is active");
            //         var playermoved=false;
            //         for(i=0;i<4;i++){

            //             if( current_turn.players[i].status=='active' && current_turn.players[i].current_position+dice_value<=current_turn.players[i].path.length){
            // $(current_turn.players[i].controller+'').trigger("click");
            // playermoved=true;
            //             }
            //         }
            //   hold(hold_time).then(()=>{
            // if(!playermoved){
            //     activateDice();
            //     updateTurn(++current_turn_index);
            // }
            // });

            //     }else if(getActivePlayers(current_turn.players[0].home)==1 && dice_value<6){
            //         ////console.log("only 1 player is active, so running automatically");
            //         for(i=0;i<4;i++){

            //             if( current_turn.players[i].status=='active'){
            // $(current_turn.players[i].controller+'').trigger("click");
            //             }
            //         }

            //     }else if(getActivePlayers(current_turn.players[0].home)==0 && dice_value==6){
            //         ////console.log("no player is active, making a player active");
            //         hold(hold_time).then(()=>{
            //             var need_to_go=true;
            //             for(i=0;i<4;i++){

            //                 if( current_turn.players[i].status=='home'){
            //     $(current_turn.players[i].controller+'').trigger("click");
            //     need_to_go=false;
            //     break;
            //                 }
            //             }

            //             if(need_to_go){
            //                 activateDice();
            //                 updateTurn(++current_turn_index);
            //                 return 0;   
            //             }


            //         });



            //     }
        });
        const hold = async (milliseconds) => {
            ////console.log("holding for "+milliseconds/1000+" seconds");
            await sleep(milliseconds);

        }
        // function updateTurn(cti){
        //     //console.log("Function Input : ",cti);
        //     if(rank_count>2){

        //         return 0;

        //     }
        // ////console.log("turn shifted to next player");

        //     $(".red_control").hide();
        //     $(".yellow_control").hide();
        //     $(".blue_control").hide();
        //     $(".green_control").hide();
        // $(".red-home").css("opacity","1");
        // $(".green-home").css("opacity","1");
        // $(".yellow-home").css("opacity","1");
        // $(".blue-home").css("opacity","1");

        // if(cti>turn_oder.length-1){

        //     current_turn_index=0;
        // }

        // current_turn=turn_oder[current_turn_index];
        // if(current_turn.rank>0){
        //     ++current_turn_index;
        //     if(current_turn_index>turn_oder.length-1){
        //         current_turn_index=0;
        //     }
        // current_turn=turn_oder[current_turn_index];  
        // }
        // if(current_turn.rank>0){
        //     ++current_turn_index;
        //     if(current_turn_index>turn_oder.length-1){
        //         current_turn_index=0;
        //     }
        // current_turn=turn_oder[current_turn_index];  
        // }
        // if(current_turn.rank>0){
        //     ++current_turn_index;
        //     if(current_turn_index>turn_oder.length-1){
        //         current_turn_index=0;
        //     }
        // current_turn=turn_oder[current_turn_index];  
        // }
        // if(current_turn.rank>0){
        //     ++current_turn_index;
        //     if(current_turn_index>turn_oder.length-1){
        //         current_turn_index=0;
        //     }
        // current_turn=turn_oder[current_turn_index];  
        // }
        // // //console.log(current_turn_index);
        // if(current_turn.group=='RED') $(".red_control").show();
        // if(current_turn.group=='GREEN') $(".green_control").show();
        // if(current_turn.group=='BLUE') $(".blue_control").show();
        // if(current_turn.group=='YELLOW') $(".yellow_control").show();
        // $(".current_turn").text(current_turn.group);
        // if(current_turn.rank<1){
        //     $(current_turn.players[0].home).css("opacity","0.5");

        // }

        // //console.log("CTI : ",current_turn_index);
        // //console.log("CURRENT USER : ",current_turn.group);
        // console.error("-------------------");

        // }
        function updateTurn(cti) {
            if (rank_count > (turn_oder.length - 2)) {
                return 0;
            }
            if (cti > (turn_oder.length - 1)) {
                cti = 0;
            }

            if (turn_oder[cti].rank > 0) {
                ++current_turn_index;
                updateTurn(++cti);
                return 0;
            }

            current_turn_index = cti;
            current_turn = turn_oder[cti];
            //console.log("current_player : ",current_turn.group);
            $(".current_turn").text(current_turn.group);
            $(".red_control").hide();
            $(".yellow_control").hide();
            $(".blue_control").hide();
            $(".green_control").hide();
            $(".red-home .white-box").css("transform", "scale(1)");
            $(".green-home .white-box").css("transform", "scale(1)");
            $(".yellow-home .white-box").css("transform", "scale(1)");
            $(".blue-home .white-box").css("transform", "scale(1)");
            if (current_turn.group == 'RED') $(".red_control").show();
            if (current_turn.group == 'GREEN') $(".green_control").show();
            if (current_turn.group == 'BLUE') $(".blue_control").show();
            if (current_turn.group == 'YELLOW') $(".yellow_control").show();
            // inout_sound.play();
            $(current_turn.players[0].home + " .white-box").css("transform", "scale(1.15)");
            six_count = 0;
            if (bot[current_turn.group.toLowerCase()]) {
                start_autorun();
            }
        }

        function getActivePlayers(home) {
            var active_players = 0;
            if (home == ".red-home") {
                if (red_player_1.status == 'active' && red_player_1.current_position + dice_value <= red_player_1.path.length) active_players++;
                if (red_player_2.status == 'active' && red_player_2.current_position + dice_value <= red_player_2.path.length) active_players++;
                if (red_player_3.status == 'active' && red_player_3.current_position + dice_value <= red_player_3.path.length) active_players++;
                if (red_player_4.status == 'active' && red_player_4.current_position + dice_value <= red_player_4.path.length) active_players++;

            }
            if (home == ".green-home") {
                if (green_player_1.status == 'active' && green_player_1.current_position + dice_value <= green_player_1.path.length) active_players++;
                if (green_player_2.status == 'active' && green_player_2.current_position + dice_value <= green_player_2.path.length) active_players++;
                if (green_player_3.status == 'active' && green_player_3.current_position + dice_value <= green_player_3.path.length) active_players++;
                if (green_player_4.status == 'active' && green_player_4.current_position + dice_value <= green_player_4.path.length) active_players++;

            }
            if (home == ".yellow-home") {
                if (yellow_player_1.status == 'active' && yellow_player_1.current_position + dice_value <= yellow_player_1.path.length) active_players++;
                if (yellow_player_2.status == 'active' && yellow_player_2.current_position + dice_value <= yellow_player_2.path.length) active_players++;
                if (yellow_player_3.status == 'active' && yellow_player_3.current_position + dice_value <= yellow_player_3.path.length) active_players++;
                if (yellow_player_4.status == 'active' && yellow_player_4.current_position + dice_value <= yellow_player_4.path.length) active_players++;

            }
            if (home == ".blue-home") {
                if (blue_player_1.status == 'active' && blue_player_1.current_position + dice_value <= blue_player_1.path.length) active_players++;
                if (blue_player_2.status == 'active' && blue_player_2.current_position + dice_value <= blue_player_2.path.length) active_players++;
                if (blue_player_3.status == 'active' && blue_player_3.current_position + dice_value <= blue_player_3.path.length) active_players++;
                if (blue_player_4.status == 'active' && blue_player_4.current_position + dice_value <= blue_player_4.path.length) active_players++;

            }
            return active_players;
        }

        function getWinPlayers(home) {
            var win_players = 0;
            if (home == ".red-home") {
                if (red_player_1.status == 'win') win_players++;
                if (red_player_2.status == 'win') win_players++;
                if (red_player_3.status == 'win') win_players++;
                if (red_player_4.status == 'win') win_players++;

            }
            if (home == ".green-home") {
                if (green_player_1.status == 'win') win_players++;
                if (green_player_2.status == 'win') win_players++;
                if (green_player_3.status == 'win') win_players++;
                if (green_player_4.status == 'win') win_players++;

            }
            if (home == ".yellow-home") {
                if (yellow_player_1.status == 'win') win_players++;
                if (yellow_player_2.status == 'win') win_players++;
                if (yellow_player_3.status == 'win') win_players++;
                if (yellow_player_4.status == 'win') win_players++;

            }
            if (home == ".blue-home") {
                if (blue_player_1.status == 'win') win_players++;
                if (blue_player_2.status == 'win') win_players++;
                if (blue_player_3.status == 'win') win_players++;
                if (blue_player_4.status == 'win') win_players++;

            }
            return win_players;
        }

        function getHomePlayers(home) {
            var home_players = 0;
            if (home == ".red-home") {
                if (red_player_1.status == 'home') home_players++;
                if (red_player_2.status == 'home') home_players++;
                if (red_player_3.status == 'home') home_players++;
                if (red_player_4.status == 'home') home_players++;

            }
            if (home == ".green-home") {
                if (green_player_1.status == 'home') home_players++;
                if (green_player_2.status == 'home') home_players++;
                if (green_player_3.status == 'home') home_players++;
                if (green_player_4.status == 'home') home_players++;

            }
            if (home == ".yellow-home") {
                if (yellow_player_1.status == 'home') home_players++;
                if (yellow_player_2.status == 'home') home_players++;
                if (yellow_player_3.status == 'home') home_players++;
                if (yellow_player_4.status == 'home') home_players++;

            }
            if (home == ".blue-home") {
                if (blue_player_1.status == 'home') home_players++;
                if (blue_player_2.status == 'home') home_players++;
                if (blue_player_3.status == 'home') home_players++;
                if (blue_player_4.status == 'home') home_players++;

            }
            return home_players;
        }


        var isPlayerIsMoving = false;
        function movePlayer(M_Player, M_Step, M_Road) {
            if (rank_count > (turn_oder.length - 2)) {
                return 0;
            }
            if (isPlayerIsMoving) {
                return 0;
            }
            if (M_Step == 0) {
                console.log(M_Player.color + ' : Dice value is 0');
                return 0;
            }

            if (M_Step == 6 && M_Player.status == 'home') {
                M_Player.status = "active";
                console.log(M_Player.color + ' : Player is active now');
                var player_room_update = $(M_Player.home + " .white-box .player-room").html();
                $(M_Player.home + " .white-box .player-room").html(player_room_update.replace(M_Player.player, ''));

                M_Step = 1;
            }
            if (M_Step != 0 && M_Player.status == 'home') {
                console.log(M_Player.color + ' : player is not active');

                return 0;
            }
            if (M_Player.status != 'active') {
                ////console.log('Player is not active');
                activateDice();
                return 0;
            }

            if (M_Player.current_position + M_Step > M_Player.path.length && getActivePlayers(M_Player.home) == 1) {
                ////console.log('you need something less to run');
                hold(hold_time).then(() => {
                    activateDice();
                    updateTurn(++current_turn_index);
                });

                return 0;
            }

            if (M_Player.current_position + M_Step > M_Player.path.length) {
                ////console.log("you need something less");
                return 0;
            }


            const run_point = [];
            for (let i = 0; i < M_Step; i++) {
                run_point.push(1);
            }
            const moveNow = async () => {
                ////console.log("player is running");
                isPlayerIsMoving = true;
                for (const item of run_point) {

                    M_Player.current_step = M_Road[M_Player.path[M_Player.current_position]];

                    if (M_Player.path[M_Player.current_position] == 'win') {
                        // alert("winner");
                        winner_sound.play();
                        M_Player.status = "win";
                        M_Player.previous_step = M_Road[M_Player.path[M_Player.current_position - 1]];
                        M_Player.previous_step.innerHTML = M_Player.previous_step.innerHTML.replace(M_Player.player, '');
                        //  var winner_home = $(".winner-home").html();
                        var pl = "";
                        if (M_Player.home == ".red-home") {
                            pl = ".rwh";
                        }
                        if (M_Player.home == ".green-home") {

                            pl = ".gwh";
                        }

                        if (M_Player.home == ".yellow-home") {

                            pl = ".ywh";
                        }
                        if (M_Player.home == ".blue-home") {

                            pl = ".bwh";
                        }

                        $(".winner-home " + pl).html($(".winner-home " + pl).html() + M_Player.player);

                        if (getWinPlayers(M_Player.home) > 3) {
                            if (!current_turn.rank > 0) {
                                current_turn.rank = ++rank_count;
                                console.log(M_Player.color + " : You just got " + rank_count + " rank ");
                            }
                            //console.log("winner "+rank_count, current_turn.group);
                            $(M_Player.home + " .white-box").css("background-image", "url(assets/img/crown" + rank_count + ".png)");


                            $(M_Player.home).css("opacity", "1");

                        }
                        return 0;
                    } else {
                        if (M_Player.current_position != 0) {
                            M_Player.previous_step = M_Road[M_Player.path[M_Player.current_position - 1]];
                            M_Player.previous_step.innerHTML = M_Player.previous_step.innerHTML.replace(M_Player.player, '');

                            M_Player.current_step.innerHTML = M_Player.current_step.innerHTML + M_Player.player;
                        } else {
                            M_Player.current_step.innerHTML = M_Player.current_step.innerHTML + M_Player.player;


                        }
                        step_sound.play();
                        M_Player.current_position++;
                    }


                    await sleep(move_time)

                }
            }

            moveNow().then(() => {
                var kill_zone = steps[M_Player.path[M_Player.current_position - 1]];
                if (kill_zone.children.length > 1 && !safe_stops.includes(M_Player.path[M_Player.current_position - 1])) {
                    // //console.log("you can kill someone");

                    for (let i = 0; i < kill_zone.children.length; i++) {
                        var enemy = player_list[kill_zone.children[i].getAttribute("id")];

                        if (kill_zone.children[i] != M_Player.player && enemy.color != M_Player.color) {

                            //console.log("you have a enemy in your zone");
                            //console.log("Enemy",kill_zone.children[i].getAttribute("id"));
                            //console.log("Enemy Dead Body",player_list[kill_zone.children[i].getAttribute("id")]);
                            $(enemy.home + " .white-box .player-room").append(enemy.player);
                            kill_zone.children[i].remove();
                            dead_sound.play();
                            enemy.resetplayer();
                            isPlayerIsMoving = false;
                            activateDice();
                            return 0;
                        }
                    }
                }


                if (rank_count > (turn_oder.length - 2)) {
                    //console.log("game finished");
                    deactivateDice();
                    for (let i = 0; i < turn_oder.length; i++) {
                        if (getWinPlayers(turn_oder[i].players[0].home) != 4) {
                            //console.log(turn_oder[i].group + " is looser");
                            break;
                        }
                    }
                    stopTimer();
                    // for(i=0;i<4;i++){
                    //     var pl_rank = turn_oder[i].rank;
                    //     var pl_name = turn_oder[i].group;
                    //     pl_name = pl_name.toLowerCase();
                    //     pl_name=pl_name.charAt(0).toUpperCase()+pl_name.slice(1);


                    //     if(pl_rank==0){
                    //      $("#r"+i).text(pl_name+" Player");
                    //      var pllogo = $("#r4").parent().children()[0];
                    //      $(pllogo).addClass("bg-"+pl_name.toLowerCase());

                    //     }




                    // }
                    // $(".gameover").css("display","");

                    return 0;
                }
                if (M_Player.status == 'win') {
                    if (current_turn.rank > 0) {
                        console.log("game finished for " + M_Player.color);



                        isPlayerIsMoving = false;
                        activateDice();
                        updateTurn(++current_turn_index);
                        return 0;
                    }
                    console.log("you just winned & getting an extra chance");
                    isPlayerIsMoving = false;
                    activateDice();
                    $(M_Player.controller).attr("disabled", true);
                    $(M_Player.controller).css("opacity", "0.6");
                    $(M_Player.controller).css("background-color", "grey");
                    return 0;
                }

                ////console.log("player is stopped running");

                if (dice_value != 6) {
                    updateTurn(++current_turn_index);
                }
                if (six_count > 2) {
                    //console.log("you got 3 sixes");
                    updateTurn(++current_turn_index);
                }
                isPlayerIsMoving = false;
                activateDice();
            });


        }

        function activateDice() {
            $("#dice").css("opacity", "1");
            dice_value = 0;
            // $("#dice").css("background-image","url('assets/img/dice"+dice_value+".png')");
            $("#dice").html("<img src='assets/img/dice" + dice_value + ".png' class='dice'/>");

            // $("#dice").attr("class","d"+dice_value);
            // $("#dice_value").text("("+dice_value+")");
            // $("#dice").text("0");
            $("#dice").attr("disabled", false);
        }
        function deactivateDice() {
            // $("#dice").css("background-image","url('assets/img/dice"+dice_value+".png')");
            $("#dice").html("<img src='assets/img/dice" + dice_value + ".png' class='dice'/>");
            // $("#dice").attr("class","d"+dice_value);

            // $("#dice_value").text("("+dice_value+")");

            $("#dice").css("opacity", "0.5");
            $("#dice").attr("disabled", true);
        }




        $("#movered1").click(() => {
            if (current_turn.group != "RED") {
                console.log("wait for your turn, please");
                return 0;
            }

            if (red_player_1.current_position + dice_value > red_player_1.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(red_player_1, dice_value, steps);
        });
        $("#movered2").click(() => {
            if (current_turn.group != "RED") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (red_player_2.current_position + dice_value > red_player_2.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(red_player_2, dice_value, steps);
        });
        $("#movered3").click(() => {
            if (current_turn.group != "RED") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (red_player_3.current_position + dice_value > red_player_3.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(red_player_3, dice_value, steps);
        });
        $("#movered4").click(() => {
            if (current_turn.group != "RED") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (red_player_4.current_position + dice_value > red_player_4.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(red_player_4, dice_value, steps);
        });


        $("#movegreen1").click(() => {
            if (current_turn.group != "GREEN") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (green_player_1.current_position + dice_value > green_player_1.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(green_player_1, dice_value, steps);
        });
        $("#movegreen2").click(() => {
            if (current_turn.group != "GREEN") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (green_player_2.current_position + dice_value > green_player_2.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(green_player_2, dice_value, steps);
        });
        $("#movegreen3").click(() => {
            if (current_turn.group != "GREEN") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (green_player_3.current_position + dice_value > green_player_3.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(green_player_3, dice_value, steps);
        });
        $("#movegreen4").click(() => {
            if (current_turn.group != "GREEN") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (green_player_4.current_position + dice_value > green_player_4.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(green_player_4, dice_value, steps);
        });





        $("#moveyellow1").click(() => {
            if (current_turn.group != "YELLOW") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (yellow_player_1.current_position + dice_value > yellow_player_1.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(yellow_player_1, dice_value, steps);
        });
        $("#moveyellow2").click(() => {
            if (current_turn.group != "YELLOW") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (yellow_player_2.current_position + dice_value > yellow_player_2.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(yellow_player_2, dice_value, steps);
        });
        $("#moveyellow3").click(() => {
            if (current_turn.group != "YELLOW") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (yellow_player_3.current_position + dice_value > yellow_player_3.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(yellow_player_3, dice_value, steps);
        });
        $("#moveyellow4").click(() => {
            if (current_turn.group != "YELLOW") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (yellow_player_4.current_position + dice_value > yellow_player_4.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(yellow_player_4, dice_value, steps);
        });

        $("#moveblue1").click(() => {

            if (current_turn.group != "BLUE") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (blue_player_1.current_position + dice_value > blue_player_1.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(blue_player_1, dice_value, steps);
        });


        $("#moveblue2").click(() => {

            if (current_turn.group != "BLUE") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (blue_player_2.current_position + dice_value > blue_player_2.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(blue_player_2, dice_value, steps);
        });

        $("#moveblue3").click(() => {

            if (current_turn.group != "BLUE") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (blue_player_3.current_position + dice_value > blue_player_3.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(blue_player_3, dice_value, steps);
        });

        $("#moveblue4").click(() => {

            if (current_turn.group != "BLUE") {
                console.log("wait for your turn, please");
                return 0;
            }
            if (blue_player_4.current_position + dice_value > blue_player_4.path.length) {
                console.log("dice value is too big for this player, try another player");
                return 0;
            }
            movePlayer(blue_player_4, dice_value, steps);
        });


        $(".restartgame").click(() => {
            window.location.reload();
        });
    }, []);
    return (
        <div className='LudoView'>
            <div className="gameover" style={{ display: 'none' }}>

                <div className="scoreboard">
                    <h1>Game Over</h1>
                    <div className="playerlist"><div className="player movered1"></div><div id="r1">Red Player</div><img src="assets/img/crown1.png" className="icon2" /></div>
                    <div className="playerlist"><div className="player movegreen1"></div><div id="r2">Green Player</div><img src="assets/img/crown2.png" className="icon2" /></div>
                    <div className="playerlist"><div className="player moveyellow1"></div><div id="r3">Yellow Player</div><img src="assets/img/crown3.png" className="icon2" /></div>
                    <div className="playerlist"><div className="player moveblue1"></div><div id="r4">Blue Player</div> Looser</div>

                </div>
            </div>
            <div className="welcome"  >

                <div className="menu">





                    <div className="lobby"  >
                        <h2 className="super-center">Play Ludo Offline</h2>
                        <div className="control3">
                            <div className="lb">
                                <button id="move-blue1" className="player playersel bg-red">

                                </button>
                                &nbsp;&nbsp;
                                <span id="red_player_name" className="f">
                                    <input type="text" className="cun" />
                                    <button className="bot botoff">
                                    </button>
                                </span>
                            </div>
                            <div className="lb"><button id="move-blue2" className="player playersel bg-green"></button>&nbsp;&nbsp;<span id="green_player_name" className="f"><input type="text" className="cun" /><button className="bot botoff"></button></span> </div>
                            <div className="lb"><button id="move-blue3" className="player playersel bg-yellow"></button>&nbsp;&nbsp;<span id="yellow_player_name" className="f"><input type="text" className="cun" /><button className="bot botoff"></button></span> </div>
                            <div className="lb"><button id="move-blue4" className="player playersel bg-blue"></button>&nbsp;&nbsp;<span id="blue_player_name" className="f"><input type="text" className="cun" /><button className="bot botoff"></button></span> </div>
                        </div>
                        <div className="super-center"><button id="start_btn">Start Game</button><button id="loading_btn" style={{ display: 'none' }} disabled><div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></button></div>
                    </div>
                    <hr />
                    <div className="super-center">Developed By Dev Ninja /&nbsp;<a href="https://www.youtube.com/devninja" className="text-decoration-none" target="_blank">Follow</a></div>


                </div>

            </div>

            <main className="container">
                <div className="ludo-board">
                    <div className="red-home red-home-bg bg-red super-center">
                        <div className="white-box super-center">
                            <div className="player-room">

                            </div>
                        </div>
                    </div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="green-home green-home-bg bg-green super-center">
                        <div className="white-box super-center">
                            <div className="player-room">

                            </div>
                        </div>
                    </div>
                    <div className="step"></div>
                    <div className="step bg-green"></div>
                    <div className="step bg-green"></div>
                    <div className="step red-stop"></div>
                    <div className="step bg-green"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-green"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-green"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-green"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-red">

                    </div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="winner-home">
                        <div className="rwh stack"></div>
                        <div className="gwh stack"></div>
                        <div className="bwh stack"></div>
                        <div className="ywh stack"></div>

                    </div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step green-stop"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-red"></div>
                    <div className="step bg-red"></div>
                    <div className="step bg-red"></div>
                    <div className="step bg-red"></div>
                    <div className="step bg-red"></div>
                    <div className="step bg-yellow"></div>
                    <div className="step bg-yellow"></div>
                    <div className="step bg-yellow"></div>
                    <div className="step bg-yellow"></div>
                    <div className="step bg-yellow"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step blue-stop"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-yellow"></div>
                    <div className="step"></div>
                    <div className="blue-home bg-blue blue-home-bg super-center">
                        <div className="white-box super-center">
                            <div className="player-room">

                            </div>
                        </div>
                    </div>
                    <div className="step"></div>
                    <div className="step bg-blue"></div>
                    <div className="step"></div>
                    <div className="yellow-home yellow-home-bg bg-yellow super-center">
                        <div className="white-box super-center">
                            <div className="player-room">

                            </div>
                        </div>
                    </div>
                    <div className="step"></div>
                    <div className="step bg-blue"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-blue"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step bg-blue"></div>
                    <div className="step yellow-stop"></div>
                    <div className="step bg-blue"></div>
                    <div className="step bg-blue"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>




                </div>

                <div className="test_controller">
                    <div className="topbar"><div className="timer"><img src="assets/img/clock.png" className="icon" /> <span id="watch">00:00:00</span></div>
                        <div className="timer">Turn : <span className="current_turn">...</span><span id="dice_value"></span></div></div>




                    <button id="dice" className="d0"></button>
                    <div className="red_control control">
                        <button id="movered1" className="player movered1 bg-red"></button>
                        <button id="movered2" className="player movered2 bg-red"></button>
                        <button id="movered3" className="player movered3 bg-red"></button>
                        <button id="movered4" className="player movered4 bg-red"></button>

                    </div>

                    <div className="green_control control">
                        <button id="movegreen1" className="player movegreen1 bg-green"></button>
                        <button id="movegreen2" className="player movegreen2 bg-green"></button>
                        <button id="movegreen3" className="player movegreen3 bg-green"></button>
                        <button id="movegreen4" className="player movegreen4 bg-green"></button>
                    </div>
                    <div className="yellow_control control">
                        <button id="moveyellow1" className="player moveyellow1 bg-yellow"></button>
                        <button id="moveyellow2" className="player moveyellow2 bg-yellow"></button>
                        <button id="moveyellow3" className="player moveyellow3 bg-yellow"></button>
                        <button id="moveyellow4" className="player moveyellow4 bg-yellow"></button>
                    </div>
                    <div className="blue_control control">
                        <button id="moveblue1" className="player moveblue1 bg-blue"></button>
                        <button id="moveblue2" className="player moveblue2 bg-blue"></button>
                        <button id="moveblue3" className="player moveblue3 bg-blue"></button>
                        <button id="moveblue4" className="player moveblue4 bg-blue"></button>
                    </div>

                    <h1 className="red_control rc_name"></h1>
                    <h1 className="green_control gc_name"></h1>
                    <h1 className="yellow_control yc_name"></h1>
                    <h1 className="blue_control bc_name"></h1>
                    <button id="host_btn" className="restartgame"  >Restart Game</button>
                </div>
            </main>
        </div>
    )
}

export default MainCopy