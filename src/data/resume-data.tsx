import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ClevertechLogo } from "@/images/logos";

export const RESUME_DATA = {
	name: "Ruan Gustavo",
	initials: "RG",
	location: "Rio Grande do Norte, Brasil",
	locationLink: "https://www.google.com/maps/place/Rio+Grande+do+Norte",
	about:
		"Desenvolvedor full-stack focado na criação de produtos com atenção extra aos detalhes",
	summary:
		"Como desenvolvedor full-stack, participei da construção de alguns produtos do 0 ao 1. Atualmente, trabalho principalmente com as tecnologias Python e Typescript, especificamente, os frameworks Django e React para construção de produtos escaláveis. Comecei a desenvolver em 2020 utilizando a linguagem Python, então tenho quatro anos de experiência com ela.",
	avatarUrl: "https://github.com/ruangustavo.png",
	personalWebsiteUrl: "https://github.com/ruangustavo",
	contact: {
		email: "dev.ruangustavo@gmail.com",
		tel: "+55 84 98160-2938",
		social: [
			{
				name: "GitHub",
				url: "https://github.com/ruangustavo",
				icon: GitHubIcon,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/ruan-gustavo/",
				icon: LinkedInIcon,
			},
		],
	},
	education: [
		{
			school:
				"Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
			degree: "Curso Técnico em Informática",
			start: "2020",
			end: "2024",
		},
	],
	work: [
		{
			company: "Legrand",
			link: "https://www.legrand.com.br/",
			badges: ["Remoto"],
			title: "Desenvolvedor Back-end",
			start: "2023",
			end: "2024",
			description:
				"Implementei a funcionalidade de atualização automática de software. Tecnologias: Java, Docker, Git e Maven",
		},
		{
			company: "iRede",
			link: "https://irede.org.br/",
			badges: ["Remoto"],
			title: "Desenvolvedor Back-end",
			logo: ClevertechLogo,
			start: "2023",
			end: "2023",
			description:
				"Assumi a responsabilidade de supervisionar o principal microsserviço da plataforma. Participei do desenvolvimento de um sistema de manipulação de mídia usando FFMPEG para  processar e gerenciar com eficiência as gravações de salas. Utilizei serviços como o Amazon S3 para armazenamento seguro de arquivos e o Amazon SQS para transmissão eficiente de dados. Realizei a migração de todas as rotas HTTP da biblioteca Gorilla/Mux para a Echo framework.",
		},
	],
	skills: [
		"Python",
		"Django",
		"TypeScript",
		"React/Next.js",
		"Docker",
		"Tailwind CSS",
		"Bootstrap",
	],
	projects: [
		{
			title: "Hackathon: Chat-bot API",
			techStack: ["Python", "Fast API"],
			description:
				"Uma API alimentada por inteligência artificial para atendimento de clientes e integração com mecanismo de busca de um site de ofertas onlines.",
			link: {
				label: "Hackathon: Chat-bot API",
				href: "https://github.com/ruangustavo/hackathon-chatbot-api",
			},
		},
		{
			title: "Portal de Notícias",
			techStack: ["Python", "Django", "Bootstrap"],
			description:
				"Um portal de notícias com sistema de autenticação e autorização de usuários, paginação, caching e mais.",
			link: {
				label: "Portal de Notícias",
				href: "https://github.com/ruangustavo/portal-de-noticias",
			},
		},
		{
			title: "IFRN Calc",
			techStack: ["Typescript", "Next.js", "Tailwind CSS", "Shadcn UI"],
			description:
				"Uma plataforma que calcula as médias necessárias para ser aprovado em todas as disciplina do IFRN. Tem integração OAuth com o portal da escola para calcular as médias de maneira automática.",
			link: {
				label: "IFRN Calc",
				href: "https://github.com/ruangustavo/ifrncalc",
			},
		},
	],
} as const;
