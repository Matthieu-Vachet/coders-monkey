import { Typography } from "@/ui/design-system/typography/typography";
import { Seo } from "../ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { RiNotification2Fill, RiShieldUserLine } from "react-icons/ri";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";

export default function Home() {
    return (
        <>
            <Seo title="Coders Monkeys" description="Description..." />

            <div className="max-w-7xl py-10 mx-auto space-y-5">
                {/* Typography */}
                <div className="space-y-2">
                    <Typography variant="caption2" weight="medium">
                        Typography
                    </Typography>
                    <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Display
                            </Typography>
                            <Typography variant="display">Nothing is impossible</Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H1
                            </Typography>
                            <Typography variant="h1">
                                Nothing is impossible, the word itself, I&apos;m possible.
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H2
                            </Typography>
                            <Typography variant="h2">
                                Your time is limited, so don&apos;t waste it living someone
                                else&apos;s life.
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H3
                            </Typography>
                            <Typography variant="h3">
                                Daily Report: Removing Checks to the Power of the Internet Titans
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H4
                            </Typography>
                            <Typography variant="h4">
                                Daily Report: Removing Checks to the Power of the Internet Titans
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H5
                            </Typography>
                            <Typography variant="h5">
                                Daily Report: Removing Checks to the Power of the Internet Titans
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Lead
                            </Typography>
                            <Typography variant="lead" weight="medium">
                                Nothing is impossible, the word itself says, I’m possible!
                            </Typography>
                            <Typography variant="lead" weight="regular">
                                Nothing is impossible, the word itself says, I’m possible!
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Body lg
                            </Typography>
                            <Typography variant="body-lg">
                                When I was 5 years old, my mother always told me that happiness was
                                the key to life. When I went to school, they asked me what I wanted
                                to be when I grew up.
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Body md
                            </Typography>
                            <Typography variant="body-base">
                                When I was 5 years old, my mother always told me that happiness was
                                the key to life. When I went to school, they asked me what I wanted
                                to be when I grew up.
                            </Typography>
                        </div>
                        <div className="py-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Body sm
                            </Typography>
                            <Typography variant="body-sm">
                                When I was 5 years old, my mother always told me that happiness was
                                the key to life. When I went to school, they asked me what I wanted
                                to be when I grew up. I wrote down ‘happy’.
                            </Typography>
                        </div>
                        <div className="flex gap-5 divide-x-2 divide-gray-400">
                            <div className="flex flex-col gap-2 pt-5">
                                <Typography variant="caption3" weight="medium">
                                    Caption 1
                                </Typography>
                                <Typography variant="caption1">Regular</Typography>
                                <Typography variant="caption1" weight="medium">
                                    Medium
                                </Typography>
                            </div>
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant="caption3" weight="medium">
                                    Caption 2
                                </Typography>
                                <Typography variant="caption2">Regular</Typography>
                                <Typography variant="caption2" weight="medium">
                                    Medium
                                </Typography>
                            </div>
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant="caption3" weight="medium">
                                    Caption 3
                                </Typography>
                                <Typography variant="caption3">Regular</Typography>
                                <Typography variant="caption3" weight="medium">
                                    Medium
                                </Typography>
                            </div>
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant="caption3" weight="medium">
                                    Caption 4
                                </Typography>
                                <Typography variant="caption4">Regular</Typography>
                                <Typography variant="caption4" weight="medium">
                                    Medium
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Spinners */}
                <div className="flex items-start gap-7">
                    <div className="space-y-2">
                        <Typography variant="caption2" weight="medium">
                            Spinners
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Spinner size="small" />
                            <Spinner />
                            <Spinner size="large" />
                        </div>
                    </div>
                </div>
                {/* Logo */}
                <div className="flex items-start gap-7">
                    <div className="space-y-2">
                        <Typography variant="caption2" weight="medium">
                            Logo
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Logo size="very-small" />
                            <Logo size="small" />
                            <Logo />
                            <Logo size="large" />
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div className="space-y-2">
                    <Typography variant="caption3" weight="medium">
                        Buttons
                    </Typography>
                    {/* Small */}
                    <div className="flex flex-col gap-2 p-5 border border-gray-400 rounded">
                        <Typography variant="caption3" weight="medium">
                            Small
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="small" variant="accent" isLoading>
                                Accent
                            </Button>
                            <Button
                                size="small"
                                variant="accent"
                                icon={{ icon: RiShieldUserLine }}
                                iconPosition="left"
                                isLoading
                            >
                                Accent
                            </Button>
                            <Button size="small" variant="secondary" isLoading>
                                secondary
                            </Button>
                            <Button
                                size="small"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                isLoading
                            >
                                ico
                            </Button>
                            <Button
                                size="small"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="secondary"
                                isLoading
                            >
                                ico
                            </Button>
                            <Button
                                size="small"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="gray"
                                isLoading
                            >
                                ico
                            </Button>
                            <Button size="small" variant="outline" isLoading>
                                outline
                            </Button>
                            <Button size="small" variant="disabled" isLoading>
                                disabled
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button size="small" variant="accent">
                                Accent
                            </Button>
                            <Button
                                size="small"
                                variant="accent"
                                icon={{ icon: RiShieldUserLine }}
                                iconPosition="left"
                                iconTheme="accent"
                            >
                                Accent
                            </Button>
                            <Button size="small" variant="secondary">
                                secondary
                            </Button>
                            <Button size="small" variant="ico" icon={{ icon: RiNotification2Fill }}>
                                ico
                            </Button>
                            <Button
                                size="small"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="secondary"
                            >
                                ico
                            </Button>
                            <Button
                                size="small"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="gray"
                            >
                                ico
                            </Button>
                            <Button size="small" variant="outline">
                                outline
                            </Button>
                            <Button size="small" variant="disabled">
                                disabled
                            </Button>
                        </div>
                    </div>
                    {/* Medium */}
                    <div className="flex flex-col gap-2 p-5 border border-gray-400 rounded">
                        <Typography variant="caption3" weight="medium">
                            Medium
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="medium" variant="accent" isLoading>
                                Accent
                            </Button>
                            <Button
                                size="medium"
                                variant="accent"
                                icon={{ icon: RiShieldUserLine }}
                                iconPosition="left"
                                isLoading
                            >
                                Accent
                            </Button>
                            <Button size="medium" variant="secondary" isLoading>
                                secondary
                            </Button>
                            <Button
                                size="medium"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                isLoading
                            >
                                ico
                            </Button>
                            <Button
                                size="medium"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="secondary"
                                isLoading
                            >
                                ico
                            </Button>
                            <Button
                                size="medium"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="gray"
                                isLoading
                            >
                                ico
                            </Button>
                            <Button size="medium" variant="outline" isLoading>
                                outline
                            </Button>
                            <Button size="medium" variant="disabled" isLoading>
                                disabled
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button size="medium" variant="accent">
                                Accent
                            </Button>
                            <Button
                                size="medium"
                                variant="accent"
                                icon={{ icon: RiShieldUserLine }}
                                iconPosition="left"
                                iconTheme="accent"
                            >
                                Accent
                            </Button>
                            <Button size="medium" variant="secondary">
                                secondary
                            </Button>
                            <Button
                                size="medium"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                            >
                                ico
                            </Button>
                            <Button
                                size="medium"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="secondary"
                            >
                                ico
                            </Button>
                            <Button
                                size="medium"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="gray"
                            >
                                ico
                            </Button>
                            <Button size="medium" variant="outline">
                                outline
                            </Button>
                            <Button size="medium" variant="disabled">
                                disabled
                            </Button>
                        </div>
                    </div>
                    {/* Large */}
                    <div className="flex flex-col gap-2 p-5 border border-gray-400 rounded">
                        <Typography variant="caption3" weight="medium">
                            Large
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="large" variant="accent" isLoading>
                                Accent
                            </Button>
                            <Button
                                size="large"
                                variant="accent"
                                icon={{ icon: RiShieldUserLine }}
                                iconPosition="left"
                                isLoading
                            >
                                Accent
                            </Button>
                            <Button size="large" variant="secondary" isLoading>
                                secondary
                            </Button>
                            <Button
                                size="large"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                isLoading
                            >
                                ico
                            </Button>
                            <Button
                                size="large"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="secondary"
                                isLoading
                            >
                                ico
                            </Button>
                            <Button
                                size="large"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="gray"
                                isLoading
                            >
                                ico
                            </Button>
                            <Button size="large" variant="outline" isLoading>
                                outline
                            </Button>
                            <Button size="large" variant="disabled" isLoading>
                                disabled
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button size="large" variant="accent">
                                Accent
                            </Button>
                            <Button
                                size="large"
                                variant="accent"
                                icon={{ icon: RiShieldUserLine }}
                                iconPosition="left"
                                iconTheme="accent"
                            >
                                Accent
                            </Button>
                            <Button size="large" variant="secondary">
                                secondary
                            </Button>
                            <Button size="large" variant="ico" icon={{ icon: RiNotification2Fill }}>
                                ico
                            </Button>
                            <Button
                                size="large"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="secondary"
                            >
                                ico
                            </Button>
                            <Button
                                size="large"
                                variant="ico"
                                icon={{ icon: RiNotification2Fill }}
                                iconTheme="gray"
                            >
                                ico
                            </Button>
                            <Button size="large" variant="outline">
                                outline
                            </Button>
                            <Button size="large" variant="disabled">
                                disabled
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
