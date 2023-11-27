import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderUsername from './ProfileHeaderUsername.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderUsername,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderUsername>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Verified: Story = {
    args: {
        profile: {
            ...mockupProfile,
            verified: true
        }
    }
};