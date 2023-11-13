import React, { useContext } from "react";
import Link from "next/link";
import AnnouncementContext from "@/context/announcementContext";
import announcementStyles from "@/styles/components/Announcement.module.scss";

const Announcement: React.FC = () => {
  const context = useContext(AnnouncementContext);

  if (!context) {
    throw new Error(
      "Announcement must be used within an AnnouncementContext.Provider"
    );
  }

  const { isAnnouncementVisible, setAnnouncementVisible } = context;

  const handleAnnouncementClose = () => {
    setAnnouncementVisible(false);
  };

  return (
    <>
      {isAnnouncementVisible && (
        <div className="container">
          <div className={announcementStyles.announcement}>
            Devgigs is currently in beta. Please report any bugs to our
            <Link className="ml-1" href="https://github.com/bick/devgigs-bugs">
              GitHub issues repo
            </Link>
            . Thank you and good luck!
            <button
              onClick={handleAnnouncementClose}
              className={announcementStyles.closeButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcement;
