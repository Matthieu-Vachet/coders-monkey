import { Typography } from "@/ui/design-system/typography/typography";
import { Seo } from "../ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { RiUser6Fill } from "react-icons/ri";
import { Spinner } from "@/ui/design-system/spinner/spinner";

export default function Home() {
    return (
        <>
            <Seo title="Coders Monkeys" description="Description..." />
            <div className="flex items-center gap-4 py-10 p-10">
                <Spinner size="small" variant="primary" />
                <Spinner variant="primary" />
                <Spinner size="large" variant="primary" />
            </div>

            <div className="flex items-center gap-4 py-10 p-10">
                <Button size="small">Accent</Button>
                <Button size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
                    Accent
                </Button>
                <Button size="small" icon={{ icon: RiUser6Fill }}>
                    Accent
                </Button>
                <Button size="small" variant="secondary">
                    Secondary
                </Button>
                <Button size="small" variant="outline">
                    outline
                </Button>
                <Button size="small" variant="disabled" disabled>
                    disabled
                </Button>
                <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
            </div>

            <div className="flex items-center gap-4 py-10 p-10">
                <Button isLoading size="small">
                    Accent
                </Button>
                <Button isLoading size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
                    Accent
                </Button>
                <Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
                    Accent
                </Button>
                <Button isLoading size="small" variant="secondary">
                    Secondary
                </Button>
                <Button isLoading size="small" variant="outline">
                    outline
                </Button>
                <Button isLoading size="small" variant="disabled" disabled>
                    disabled
                </Button>
                <Button isLoading size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
            </div>

            <div className="flex items-center gap-4 py-10 p-10">
                <Button>Accent</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">outline</Button>
                <Button variant="disabled" disabled>
                    disabled
                </Button>
                <Button variant="ico" icon={{ icon: RiUser6Fill }} />
            </div>

            <div className="flex items-center gap-4 py-10 p-10">
                <Button size="large">Accent</Button>
                <Button size="large" variant="secondary">
                    Secondary
                </Button>
                <Button size="large" variant="outline">
                    outline
                </Button>
                <Button size="large" variant="disabled" disabled>
                    disabled
                </Button>
                <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
                <Button
                    size="large"
                    variant="ico"
                    iconTheme="secondary"
                    icon={{ icon: RiUser6Fill }}
                />
                <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiUser6Fill }} />
            </div>
        </>
    );
}
