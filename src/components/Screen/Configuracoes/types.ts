export interface IConfiguracoesProps {
    pageTitle: string,
    settings: SettingsType;
    onSaveSettings: (settings: SettingsType) => void;
    onCancelSettings: () => void;
    availableThemes: ThemeType[];
    onChangeTheme: (theme: ThemeType) => void;
}

interface SettingsState {
    modifiedSettings: SettingsType;
    isSaving: boolean;
    isCancelling: boolean;
}

type SettingsType = {
    notifications: boolean;
    theme: ThemeType;
    displayPreferences: DisplayPreferencesType;
};


type ThemeType = {
    label: string;
    name: string;
};

type DisplayPreferencesType = {
    fontSize: number;
    showImages: boolean;
};



