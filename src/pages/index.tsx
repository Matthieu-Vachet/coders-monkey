import { Typography } from "@/ui/design-system/typography/typography";
import { Seo } from "../ui/components/seo";

export default function Home() {
    return (
        <>
            <Seo title="Coders Monkeys" description="Description..." />
            <Typography variant="display" component="h1">
                Coders Monkey
            </Typography>
            <Typography theme="primary" variant="body-lg" component="h1">
                Coders Monkey
            </Typography>
            <Typography theme="secondary" variant="lead" component="h1">
                Coders Monkey
            </Typography>
            <Typography variant="body-sm" component="h1">
                Coders Monkey
            </Typography>
            <Typography variant="caption4" component="h1">
                Coders Monkey
            </Typography>
        </>
    );
}
