"use client";

import { FC, useEffect, useState } from "react";
import ConfigureAI from "../ai/ConfigureAI";
import SearchAI from "../ai/SearchAI";
import EmbedModal from "../modals/embed-modal";
import FeedbackModal from "../modals/feedback-modal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <EmbedModal />
            <ConfigureAI.Mobile />
            <SearchAI />
            <FeedbackModal />
        </>
    );
};

export default ModalProvider;
