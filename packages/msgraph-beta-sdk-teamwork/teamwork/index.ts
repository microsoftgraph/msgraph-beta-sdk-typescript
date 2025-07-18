/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamworkFromDiscriminatorValue, serializeTeamwork, type Teamwork } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DeletedChatsRequestBuilderNavigationMetadata, DeletedChatsRequestBuilderRequestsMetadata, type DeletedChatsRequestBuilder } from './deletedChats/index.js';
// @ts-ignore
import { DeletedTeamsRequestBuilderNavigationMetadata, DeletedTeamsRequestBuilderRequestsMetadata, type DeletedTeamsRequestBuilder } from './deletedTeams/index.js';
// @ts-ignore
import { DetermineIfInteractionIsAllowedRequestBuilderRequestsMetadata, type DetermineIfInteractionIsAllowedRequestBuilder } from './determineIfInteractionIsAllowed/index.js';
// @ts-ignore
import { DevicesRequestBuilderNavigationMetadata, DevicesRequestBuilderRequestsMetadata, type DevicesRequestBuilder } from './devices/index.js';
// @ts-ignore
import { SendActivityNotificationToRecipientsRequestBuilderRequestsMetadata, type SendActivityNotificationToRecipientsRequestBuilder } from './sendActivityNotificationToRecipients/index.js';
// @ts-ignore
import { TeamsAppSettingsRequestBuilderRequestsMetadata, type TeamsAppSettingsRequestBuilder } from './teamsAppSettings/index.js';
// @ts-ignore
import { TeamTemplatesRequestBuilderNavigationMetadata, TeamTemplatesRequestBuilderRequestsMetadata, type TeamTemplatesRequestBuilder } from './teamTemplates/index.js';
// @ts-ignore
import { type WorkforceIntegrationsRequestBuilder, WorkforceIntegrationsRequestBuilderNavigationMetadata, WorkforceIntegrationsRequestBuilderRequestsMetadata } from './workforceIntegrations/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the teamwork singleton.
 */
export interface TeamworkRequestBuilder extends BaseRequestBuilder<TeamworkRequestBuilder> {
    /**
     * Provides operations to manage the deletedChats property of the microsoft.graph.teamwork entity.
     */
    get deletedChats(): DeletedChatsRequestBuilder;
    /**
     * Provides operations to manage the deletedTeams property of the microsoft.graph.teamwork entity.
     */
    get deletedTeams(): DeletedTeamsRequestBuilder;
    /**
     * Provides operations to call the determineIfInteractionIsAllowed method.
     */
    get determineIfInteractionIsAllowed(): DetermineIfInteractionIsAllowedRequestBuilder;
    /**
     * Provides operations to manage the devices property of the microsoft.graph.teamwork entity.
     */
    get devices(): DevicesRequestBuilder;
    /**
     * Provides operations to call the sendActivityNotificationToRecipients method.
     */
    get sendActivityNotificationToRecipients(): SendActivityNotificationToRecipientsRequestBuilder;
    /**
     * Provides operations to manage the teamsAppSettings property of the microsoft.graph.teamwork entity.
     */
    get teamsAppSettings(): TeamsAppSettingsRequestBuilder;
    /**
     * Provides operations to manage the teamTemplates property of the microsoft.graph.teamwork entity.
     */
    get teamTemplates(): TeamTemplatesRequestBuilder;
    /**
     * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
     */
    get workforceIntegrations(): WorkforceIntegrationsRequestBuilder;
    /**
     * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Teamwork>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/teamwork-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TeamworkRequestBuilderGetQueryParameters> | undefined) : Promise<Teamwork | undefined>;
    /**
     * Update teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Teamwork>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Teamwork, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Teamwork | undefined>;
    /**
     * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeamworkRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Teamwork, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
 */
export interface TeamworkRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const TeamworkRequestBuilderUriTemplate = "{+baseurl}/teamwork{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TeamworkRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TeamworkRequestBuilderNavigationMetadata: Record<Exclude<keyof TeamworkRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deletedChats: {
        requestsMetadata: DeletedChatsRequestBuilderRequestsMetadata,
        navigationMetadata: DeletedChatsRequestBuilderNavigationMetadata,
    },
    deletedTeams: {
        requestsMetadata: DeletedTeamsRequestBuilderRequestsMetadata,
        navigationMetadata: DeletedTeamsRequestBuilderNavigationMetadata,
    },
    determineIfInteractionIsAllowed: {
        requestsMetadata: DetermineIfInteractionIsAllowedRequestBuilderRequestsMetadata,
    },
    devices: {
        requestsMetadata: DevicesRequestBuilderRequestsMetadata,
        navigationMetadata: DevicesRequestBuilderNavigationMetadata,
    },
    sendActivityNotificationToRecipients: {
        requestsMetadata: SendActivityNotificationToRecipientsRequestBuilderRequestsMetadata,
    },
    teamsAppSettings: {
        requestsMetadata: TeamsAppSettingsRequestBuilderRequestsMetadata,
    },
    teamTemplates: {
        requestsMetadata: TeamTemplatesRequestBuilderRequestsMetadata,
        navigationMetadata: TeamTemplatesRequestBuilderNavigationMetadata,
    },
    workforceIntegrations: {
        requestsMetadata: WorkforceIntegrationsRequestBuilderRequestsMetadata,
        navigationMetadata: WorkforceIntegrationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeamworkRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TeamworkRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkFromDiscriminatorValue,
        queryParametersMapper: TeamworkRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TeamworkRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamwork,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
