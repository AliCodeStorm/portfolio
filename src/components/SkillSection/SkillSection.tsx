"use client";
import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faHtml5,
    faCss3Alt,
    faJs,
    faBootstrap,
    faNodeJs,
    faGitAlt,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faArrowRight,
    faDatabase,
    faShieldAlt,
    faRobot,
    faBrush
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const ItemTypes = {
    SKILL_CARD: 'skill_card'
};

interface SkillItem {
    icon: IconDefinition;
    title: string;
    level: string;
    note: string;
}

interface SkillsData {
    [key: string]: SkillItem[];
}

const initialSkills: SkillsData = {
    frontend: [
        { icon: faReact, title: "React.js", level: "95%", note: "Advanced hooks and context API" },
        { icon: faHtml5, title: "HTML5", level: "95%", note: "Semantic markup expert" },
        { icon: faCss3Alt, title: "CSS3", level: "90%", note: "Modern layouts and animations" },
        { icon: faJs, title: "JavaScript", level: "85%", note: "ES6+ features mastery" },
        { icon: faBootstrap, title: "Bootstrap", level: "85%", note: "Rapid prototyping" },
        { icon: faBrush, title: "UI/UX Design", level: "70%", note: "User-centered design principles" },
        { icon: faArrowRight, title: "Next.js", level: "80%", note: "SSR and static generation" },
    ],
    backend: [
        { icon: faNodeJs, title: "Node.js", level: "90%", note: "Building scalable APIs" },
        { icon: faShieldAlt, title: "Auth Systems", level: "75%", note: "Secure authentication flows" },
        { icon: faDatabase, title: "MongoDB", level: "80%", note: "NoSQL database design" },
    ],
    tools: [
        { icon: faGitAlt, title: "Version Control", level: "60%", note: "Git workflows" },
        { icon: faRobot, title: "AI Integration", level: "70%", note: "LLM applications" },
        { icon: faYoutube, title: "Continuous Learning", level: "65%", note: "Tech education" },
    ],
};

interface DraggableSkillItemProps {
    item: SkillItem;
    index: number;
    moveCard: (dragIndex: number, hoverIndex: number, category: string) => void;
    category: string;
}

const DraggableSkillItem: React.FC<DraggableSkillItemProps> = ({ item, index, moveCard, category }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.SKILL_CARD,
        item: { index, category },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ItemTypes.SKILL_CARD,
        hover: (draggedItem: { index: number; category: string }) => {
            if (draggedItem.category !== category) return;
            if (draggedItem.index !== index) {
                moveCard(draggedItem.index, index, category);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div
            ref={(node) => {
                if (node) {
                    drag(drop(node));
                }
            }}
            className={`bg-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden z-10 border border-gray-800 group ${isDragging ? 'opacity-50' : 'opacity-100'
                }`}
        >
            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 h-full transition-all duration-300 z-0"></div>

            <div className="absolute top-0 left-0 h-full w-0 bg-red-600 opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-20 z-0"></div>

            <div className="text-3xl text-purple-500 mb-4 transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={item.icon} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
            <div className="w-full bg-gray-800 h-2 rounded-full mb-4">
                <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                    style={{ width: item.level }}
                ></div>
            </div>
            <p className="text-sm text-pink-400 opacity-80 italic transition-all duration-300 hover:opacity-100">
                {item.note}
            </p>
        </div>
    );
};


const SkillsSection: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [skills, setSkills] = useState<SkillsData>(initialSkills);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const moveCard = (dragIndex: number, hoverIndex: number, category: string) => {
        setSkills(prev => {
            const newCategoryItems = [...prev[category]];
            const draggedItem = newCategoryItems[dragIndex];
            newCategoryItems.splice(dragIndex, 1);
            newCategoryItems.splice(hoverIndex, 0, draggedItem);
            return { ...prev, [category]: newCategoryItems };
        });
    };

    if (!isMounted) {
        return (
            <section id="skills" className="py-16 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Technical Expertise</h2>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <section id="skills" className="py-16 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-white ">Technical Expertise</h2>
                        <p className="text-white mt-2">Technologies I specialize in</p>
                    </div>

                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="mb-10">
                            <h3 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400 capitalize">
                                {category === 'tools' ? 'Development Tools' : `${category} Technologies`}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {items.map((item, index) => (
                                    <DraggableSkillItem
                                        key={`${category}-${item.title}`}
                                        item={item}
                                        index={index}
                                        moveCard={moveCard}
                                        category={category}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </DndProvider>
    );
};

export default SkillsSection;