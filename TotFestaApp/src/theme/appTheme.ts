import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { AppColors } from './appColors';

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,

        "primary": AppColors.Aqua,
        "onPrimary": AppColors.AquaClar,
        "primaryContainer": AppColors.AquaClar,
        "onPrimaryContainer": AppColors.AquaObscur,

        "secondary": AppColors.Verd,
        "onSecondary": AppColors.VerdObscur,
        "secondaryContainer": AppColors.VerdClar,
        "onSecondaryContainer": AppColors.VerdObscur,

        "tertiary": AppColors.Groc,
        "onTertiary": AppColors.BaseObscur,
        "tertiaryContainer": AppColors.GrocClar,
        "onTertiaryContainer": AppColors.GrocObscur,

        "quaternary": AppColors.Morat,
        "onQuaternary": AppColors.MoratClar,
        "quaternaryContainer": AppColors.MoratClar,
        "onQuaternaryContainer": AppColors.MoratObscur,

        "quinary": AppColors.Fucsia,
        "onQuinary": AppColors.FucsiaClar,
        "quinaryContainer": AppColors.FucsiaClar,
        "onQuinaryContainer": AppColors.FucsiaObscur,

        "error": "#cc0000",
        "onError": AppColors.BaseClar,
        "errorContainer": "#ffe6e6",
        "onErrorContainer": "#400000",

        "background": AppColors.BaseClar,
        "onBackground": AppColors.BaseObscur,

        "surface": AppColors.BaseClar,
        "onSurface": AppColors.BaseObscur,
        "surfaceVariant": AppColors.BaseMig,
        "onSurfaceVariant": AppColors.BaseObscur,
        "surfaceDisabled": "#1414142c",
        "onSurfaceDisabled": "#4b4b4b80",

        "inverseSurface": AppColors.BaseObscur,
        "inverseOnSurface": AppColors.BaseClar,

        "outline": AppColors.BaseObscur,
        "outlineVariant": AppColors.BaseMig,

        // Color base de les ombres
        "shadow": AppColors.BaseObscur,

        // Fons fosc darrere de modals
        "scrim": AppColors.BaseMig,

        // Fons difuminat darrere de superfícies elevades
        "backdrop": "#1414144C",

        "elevation": {
            "level0": "transparent",
            "level1": "rgb(28, 37, 40)",
            "level2": "rgb(30, 43, 46)",
            "level3": "rgb(31, 49, 52)",
            "level4": "rgb(32, 50, 54)",
            "level5": "rgb(33, 54, 59)"
        },
    },

    fonts: {
        ...MD3LightTheme.fonts,

        displayLarge: {
            ...MD3LightTheme.fonts.displayLarge,
            fontFamily: "WenKai",
        },
        displayMedium: {
            ...MD3LightTheme.fonts.displayMedium,
            fontFamily: "WenKai",
        },
        displaySmall: {
            ...MD3LightTheme.fonts.displaySmall,
            fontFamily: "WenKai",
        },

        headlineLarge: {
            ...MD3LightTheme.fonts.headlineLarge,
            fontFamily: "Schibsted",
        },
        headlineMedium: {
            ...MD3LightTheme.fonts.headlineMedium,
            fontFamily: "Schibsted",
        },
        headlineSmall: {
            ...MD3LightTheme.fonts.headlineSmall,
            fontFamily: "Schibsted",
        },


        titleLarge: {
            ...MD3LightTheme.fonts.titleLarge,
            fontFamily: "WenKai",
        },
        titleMedium: {
            ...MD3LightTheme.fonts.titleMedium,
            fontFamily: "WenKai",
        },
        titleSmall: {
            ...MD3LightTheme.fonts.titleSmall,
            fontFamily: "WenKai",
        },

        bodyLarge: {
            ...MD3LightTheme.fonts.bodyLarge,
            fontFamily: "Schibsted",
        },
        bodyMedium: {
            ...MD3LightTheme.fonts.bodyMedium,
            fontFamily: "Schibsted",
        },
        bodySmall: {
            ...MD3LightTheme.fonts.bodySmall,
            fontFamily: "Schibsted",
        },

        labelLarge: {
            ...MD3LightTheme.fonts.labelLarge,
            fontFamily: "RobotoMono",
        },
        labelMedium: {
            ...MD3LightTheme.fonts.labelMedium,
            fontFamily: "RobotoMono",
        },
        labelSmall: {
            ...MD3LightTheme.fonts.labelSmall,
            fontFamily: "RobotoMono",
        },
    },



    // fonts: AppFonts,

    roundness: 5,
};


export const darkTheme = {
    ...MD3DarkTheme,

    colors: {
        ...MD3DarkTheme.colors,

        "primary": AppColors.AquaObscur,
        "onPrimary": AppColors.AquaClar,
        "primaryContainer": AppColors.AquaClar,
        "onPrimaryContainer": AppColors.Aqua,

        "secondary": AppColors.Verd,
        "onSecondary": AppColors.VerdObscur,
        "secondaryContainer": AppColors.VerdClar,
        "onSecondaryContainer": AppColors.VerdObscur,

        "tertiary": AppColors.Groc,
        "onTertiary": AppColors.BaseObscur,
        "tertiaryContainer": AppColors.GrocClar,
        "onTertiaryContainer": AppColors.GrocObscur,

        "quaternary": AppColors.Morat,
        "onQuaternary": AppColors.MoratClar,
        "quaternaryContainer": AppColors.MoratClar,
        "onQuaternaryContainer": AppColors.MoratObscur,

        "quinary": AppColors.Fucsia,
        "onQuinary": AppColors.FucsiaClar,
        "quinaryContainer": AppColors.FucsiaClar,
        "onQuinaryContainer": AppColors.FucsiaObscur,

        "error": "#990000",
        "onError": AppColors.BaseClar,
        "errorContainer": "#ffe6e6",
        "onErrorContainer": "#400000",

        "background": AppColors.BaseObscur,
        "onBackground": AppColors.BaseClar,

        "surface": AppColors.BaseObscur,
        "onSurface": AppColors.BaseClar,
        "surfaceVariant": AppColors.BaseMig,
        "onSurfaceVariant": AppColors.BaseClar,
        "surfaceDisabled": "#1414142c",
        "onSurfaceDisabled": "#4b4b4b80",

        "inverseSurface": AppColors.BaseClar,
        "inverseOnSurface": AppColors.BaseObscur,

        "outline": AppColors.BaseClar,
        "outlineVariant": AppColors.BaseMig,

        // Color base de les ombres
        "shadow": AppColors.BaseClar,

        // Fons fosc darrere de modals
        "scrim": AppColors.BaseMig,

        // Fons difuminat darrere de superfícies elevades
        "backdrop": "#1414144C",

        "elevation": {
            "level0": "transparent",
            "level1": "rgb(238, 245, 246)",
            "level2": "rgb(231, 240, 242)",
            "level3": "rgb(223, 236, 238)",
            "level4": "rgb(221, 234, 237)",
            "level5": "rgb(216, 231, 234)"
        },
    },
    fonts: {
        ...MD3DarkTheme.fonts,

        displayLarge: {
            ...MD3DarkTheme.fonts.displayLarge,
            fontFamily: "WenKai",
        },
        displayMedium: {
            ...MD3DarkTheme.fonts.displayMedium,
            fontFamily: "WenKai",
        },
        displaySmall: {
            ...MD3DarkTheme.fonts.displaySmall,
            fontFamily: "WenKai",
        },

        headlineLarge: {
            ...MD3DarkTheme.fonts.headlineLarge,
            fontFamily: "Schibsted",
        },
        headlineMedium: {
            ...MD3DarkTheme.fonts.headlineMedium,
            fontFamily: "Schibsted",
        },
        headlineSmall: {
            ...MD3DarkTheme.fonts.headlineSmall,
            fontFamily: "Schibsted",
        },


        titleLarge: {
            ...MD3DarkTheme.fonts.titleLarge,
            fontFamily: "WenKai",
        },
        titleMedium: {
            ...MD3DarkTheme.fonts.titleMedium,
            fontFamily: "WenKai",
        },
        titleSmall: {
            ...MD3DarkTheme.fonts.titleSmall,
            fontFamily: "WenKai",
        },

        bodyLarge: {
            ...MD3DarkTheme.fonts.bodyLarge,
            fontFamily: "Schibsted",
        },
        bodyMedium: {
            ...MD3DarkTheme.fonts.bodyMedium,
            fontFamily: "Schibsted",
        },
        bodySmall: {
            ...MD3DarkTheme.fonts.bodySmall,
            fontFamily: "Schibsted",
        },

        labelLarge: {
            ...MD3DarkTheme.fonts.labelLarge,
            fontFamily: "RobotoMono",
        },
        labelMedium: {
            ...MD3DarkTheme.fonts.labelMedium,
            fontFamily: "RobotoMono",
        },
        labelSmall: {
            ...MD3DarkTheme.fonts.labelSmall,
            fontFamily: "RobotoMono",
        },
    },

};