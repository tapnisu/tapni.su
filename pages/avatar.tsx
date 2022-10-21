import Footer from "@components/Footer";
import Nav from "@components/Nav";
import type { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Projects - Alexiy Rybin</title>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Nav />

				<div className="text-center">
					<h1 className="text-3xl">Avatar</h1>
					<p>I don{"'"}t know why would you need it</p>
					<pre>
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@{"\n"}
@@@@@@@@@@@@@@@@@@@@@@@@@@#######@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@{"\n"}
@@@@@@@@@@@@@@@@@@@@@@##S?*+;;:;;+?%S#@@@@@@@@@@@@@@@@@@@@@@@@@@{"\n"}
@@@@@@@@@@@@@@@@@@@@@@###S%?*+;,.   .;?#######@@@@@@@@@@@@@@@@@@{"\n"}
@@@@@@@@@@@@@@@@@@@#S%*+:,...          ,++;;;;+?%S##@@@@@@@@@@@@{"\n"}
@@@@@@@@@@@@@@@##S*:.                         ,:::;*%#@@@@@@@@@@{"\n"}
@@@@@@@@@@@@@#S*:.                             :+?%%??%#@@@@@@@@{"\n"}
@@@@@@@@@@@##*,                                   .:*%SS#@@@@@@@{"\n"}
@@@@@@@@@@#?::,                                      .:?#@@@@@@@{"\n"}
@@@@@@@@@#*.+%,                                      ...:?#@@@@@{"\n"}
@@@@@@@@#+.*#S,         .                            :+?+:*#@@@@{"\n"}
@@@@@@@#* +?*;.        ;,        ,,                  :?*##?%#@@@{"\n"}
@@@@@@@%.,;.          ,?;      ,+*.                 ,?S??##S#@@@{"\n"}
@@@@@@#: ,            ;.     .*SS:                 .?###*#@@@@@@{"\n"}
@@@@@@% .            ..       ;%;:*:  .:+:          .;?%?%@@@@@@{"\n"}
@@@@@@* .            .        ,::?SS*;?%;             .;?*#@@@@@{"\n"}
@@@@@#;           :.           :%S##???:                :+#@@@@@{"\n"}
@@@@@#:          :?.          ;%SSSSSSS?.               .;#@@@@@{"\n"}
@@@@@#,      :  ,*?,.       ,*S######S##?.               ;#@@@@#{"\n"}
@@@@@#,     ,?.;;,,.,. .::,+%###S%%SSS###*               :#@@@#?{"\n"}
@@@@@S.     ,S?##,   .+***S###%++;,,,,:+?*  .:++         ;#@@#?*{"\n"}
@@@@@%,     .%#@#+   :#S##@@@@####:  ..?#*  *%??.        *@@#*%#{"\n"}
@@@@#?+      ?@@@S+;+?#@@@@@@@@@@#+...,S#+ ,%SS?        .S@#?S#@{"\n"}
@@@#%%S.     *#@@@####@@@@@@@@@@@@S**%S#@* :%%*.        :##%S@@@{"\n"}
@@@####,     :#@@@@@@@@@@@@@@@@@@@@##@@@#* :+,          *####@@@{"\n"}
@@@@@@#+      :%#@@@@@@@@@@@@@@@@@@@@@#S*,           .  %@@@@@@@{"\n"}
?##@@@@%       .+%##@@@@#%%##@@@@@@#S%*+,.          .+ .#@@@@@@@{"\n"}
*;?#@@@#:         ;?@@#@#S#S#@@@@@%++?%%%?:+++;:,,. +% :#@@@@@@@{"\n"}
#S++S#@@%.        ;%??**%@@@@S%?**?:?%%%??+*???%S#S**%.+#@@@@@@@{"\n"}
@@#%;?#@#*       .**???????????????*?%SS##S%###@@@#S;%,*@@@@@@@@{"\n"}
@@@#S++SS?,..    :S#S%?????????SS#######SSS#@@@@@@#S++;?@@@@@@@@{"\n"}
@@@@@#*:*%?:;.   :?S#@#######@@###SSSSSS###@@#######S%;+#@@@@###{"\n"}
@@@@@@#*;SS%+*:  :++#@@@@@@@#S?%SSS######SSSS%%?%??%??;%%#@@@##S{"\n"}
@@@@@@@#+;##%*%*:,+%#@@@@@@@#%+%@@#S%%?%%%SS#####@@@#S*?##@@@@@@{"\n"}

					</pre>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export default Projects;
