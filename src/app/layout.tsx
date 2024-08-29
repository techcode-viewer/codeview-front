import ReduxProvider from "@/hooks/ReduxProvider";
import { Nanum_Gothic } from "next/font/google";
import "./styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MSWComponent } from "@/hooks/MSWComponet";
import ReactQueryProviders from "@/hooks/ReactQueryProviders";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <MSWComponent>
                    <ReactQueryProviders>
                        <ReduxProvider>{children}</ReduxProvider>
                    </ReactQueryProviders>
                </MSWComponent>
            </body>
        </html>
    );
}
