/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTeamFromDiscriminatorValue, serializeTeam, type Team } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AllChannelsRequestBuilderNavigationMetadata, AllChannelsRequestBuilderRequestsMetadata, AllChannelsRequestBuilderUriTemplate, type AllChannelsRequestBuilder } from './allChannels/';
import { ArchiveRequestBuilderRequestsMetadata, ArchiveRequestBuilderUriTemplate, type ArchiveRequestBuilder } from './archive/';
import { ChannelsRequestBuilderNavigationMetadata, ChannelsRequestBuilderRequestsMetadata, ChannelsRequestBuilderUriTemplate, type ChannelsRequestBuilder } from './channels/';
import { CloneRequestBuilderRequestsMetadata, CloneRequestBuilderUriTemplate, type CloneRequestBuilder } from './clone/';
import { CompleteMigrationRequestBuilderRequestsMetadata, CompleteMigrationRequestBuilderUriTemplate, type CompleteMigrationRequestBuilder } from './completeMigration/';
import { GroupRequestBuilderNavigationMetadata, GroupRequestBuilderRequestsMetadata, GroupRequestBuilderUriTemplate, type GroupRequestBuilder } from './group/';
import { IncomingChannelsRequestBuilderNavigationMetadata, IncomingChannelsRequestBuilderRequestsMetadata, IncomingChannelsRequestBuilderUriTemplate, type IncomingChannelsRequestBuilder } from './incomingChannels/';
import { InstalledAppsRequestBuilderNavigationMetadata, InstalledAppsRequestBuilderRequestsMetadata, InstalledAppsRequestBuilderUriTemplate, type InstalledAppsRequestBuilder } from './installedApps/';
import { MembersRequestBuilderNavigationMetadata, MembersRequestBuilderRequestsMetadata, MembersRequestBuilderUriTemplate, type MembersRequestBuilder } from './members/';
import { OperationsRequestBuilderNavigationMetadata, OperationsRequestBuilderRequestsMetadata, OperationsRequestBuilderUriTemplate, type OperationsRequestBuilder } from './operations/';
import { OwnersRequestBuilderNavigationMetadata, OwnersRequestBuilderRequestsMetadata, OwnersRequestBuilderUriTemplate, type OwnersRequestBuilder } from './owners/';
import { PermissionGrantsRequestBuilderNavigationMetadata, PermissionGrantsRequestBuilderRequestsMetadata, PermissionGrantsRequestBuilderUriTemplate, type PermissionGrantsRequestBuilder } from './permissionGrants/';
import { PhotoRequestBuilderNavigationMetadata, PhotoRequestBuilderRequestsMetadata, PhotoRequestBuilderUriTemplate, type PhotoRequestBuilder } from './photo/';
import { PrimaryChannelRequestBuilderNavigationMetadata, PrimaryChannelRequestBuilderRequestsMetadata, PrimaryChannelRequestBuilderUriTemplate, type PrimaryChannelRequestBuilder } from './primaryChannel/';
import { ScheduleRequestBuilderNavigationMetadata, ScheduleRequestBuilderRequestsMetadata, ScheduleRequestBuilderUriTemplate, type ScheduleRequestBuilder } from './schedule/';
import { SendActivityNotificationRequestBuilderRequestsMetadata, SendActivityNotificationRequestBuilderUriTemplate, type SendActivityNotificationRequestBuilder } from './sendActivityNotification/';
import { TagsRequestBuilderNavigationMetadata, TagsRequestBuilderRequestsMetadata, TagsRequestBuilderUriTemplate, type TagsRequestBuilder } from './tags/';
import { TemplateRequestBuilderRequestsMetadata, TemplateRequestBuilderUriTemplate, type TemplateRequestBuilder } from './template/';
import { TemplateDefinitionRequestBuilderRequestsMetadata, TemplateDefinitionRequestBuilderUriTemplate, type TemplateDefinitionRequestBuilder } from './templateDefinition/';
import { type UnarchiveRequestBuilder, UnarchiveRequestBuilderRequestsMetadata, UnarchiveRequestBuilderUriTemplate } from './unarchive/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the team property of the microsoft.graph.group entity.
 */
export interface TeamRequestBuilder extends BaseRequestBuilder<TeamRequestBuilder> {
    /**
     * Provides operations to manage the allChannels property of the microsoft.graph.team entity.
     */
    get allChannels(): AllChannelsRequestBuilder;
    /**
     * Provides operations to call the archive method.
     */
    get archive(): ArchiveRequestBuilder;
    /**
     * Provides operations to manage the channels property of the microsoft.graph.team entity.
     */
    get channels(): ChannelsRequestBuilder;
    /**
     * Provides operations to call the clone method.
     */
    get clone(): CloneRequestBuilder;
    /**
     * Provides operations to call the completeMigration method.
     */
    get completeMigration(): CompleteMigrationRequestBuilder;
    /**
     * Provides operations to manage the group property of the microsoft.graph.team entity.
     */
    get group(): GroupRequestBuilder;
    /**
     * Provides operations to manage the incomingChannels property of the microsoft.graph.team entity.
     */
    get incomingChannels(): IncomingChannelsRequestBuilder;
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
     */
    get installedApps(): InstalledAppsRequestBuilder;
    /**
     * Provides operations to manage the members property of the microsoft.graph.team entity.
     */
    get members(): MembersRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.team entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to manage the owners property of the microsoft.graph.team entity.
     */
    get owners(): OwnersRequestBuilder;
    /**
     * Provides operations to manage the permissionGrants property of the microsoft.graph.team entity.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
    /**
     * Provides operations to manage the photo property of the microsoft.graph.team entity.
     */
    get photo(): PhotoRequestBuilder;
    /**
     * Provides operations to manage the primaryChannel property of the microsoft.graph.team entity.
     */
    get primaryChannel(): PrimaryChannelRequestBuilder;
    /**
     * Provides operations to manage the schedule property of the microsoft.graph.team entity.
     */
    get schedule(): ScheduleRequestBuilder;
    /**
     * Provides operations to call the sendActivityNotification method.
     */
    get sendActivityNotification(): SendActivityNotificationRequestBuilder;
    /**
     * Provides operations to manage the tags property of the microsoft.graph.team entity.
     */
    get tags(): TagsRequestBuilder;
    /**
     * Provides operations to manage the template property of the microsoft.graph.team entity.
     */
    get template(): TemplateRequestBuilder;
    /**
     * Provides operations to manage the templateDefinition property of the microsoft.graph.team entity.
     */
    get templateDefinition(): TemplateDefinitionRequestBuilder;
    /**
     * Provides operations to call the unarchive method.
     */
    get unarchive(): UnarchiveRequestBuilder;
    /**
     * Delete navigation property team for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The team associated with this group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Team
     */
     get(requestConfiguration?: RequestConfiguration<TeamRequestBuilderGetQueryParameters> | undefined) : Promise<Team | undefined>;
    /**
     * Update the navigation property team in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Team
     */
     put(body: Team, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Team | undefined>;
    /**
     * Delete navigation property team for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The team associated with this group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeamRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property team in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPutRequestInformation(body: Team, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The team associated with this group.
 */
export interface TeamRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TeamRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TeamRequestBuilderNavigationMetadata: Record<Exclude<keyof TeamRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    allChannels: {
        uriTemplate: AllChannelsRequestBuilderUriTemplate,
        requestsMetadata: AllChannelsRequestBuilderRequestsMetadata,
        navigationMetadata: AllChannelsRequestBuilderNavigationMetadata,
    },
    archive: {
        uriTemplate: ArchiveRequestBuilderUriTemplate,
        requestsMetadata: ArchiveRequestBuilderRequestsMetadata,
    },
    channels: {
        uriTemplate: ChannelsRequestBuilderUriTemplate,
        requestsMetadata: ChannelsRequestBuilderRequestsMetadata,
        navigationMetadata: ChannelsRequestBuilderNavigationMetadata,
    },
    clone: {
        uriTemplate: CloneRequestBuilderUriTemplate,
        requestsMetadata: CloneRequestBuilderRequestsMetadata,
    },
    completeMigration: {
        uriTemplate: CompleteMigrationRequestBuilderUriTemplate,
        requestsMetadata: CompleteMigrationRequestBuilderRequestsMetadata,
    },
    group: {
        uriTemplate: GroupRequestBuilderUriTemplate,
        requestsMetadata: GroupRequestBuilderRequestsMetadata,
        navigationMetadata: GroupRequestBuilderNavigationMetadata,
    },
    incomingChannels: {
        uriTemplate: IncomingChannelsRequestBuilderUriTemplate,
        requestsMetadata: IncomingChannelsRequestBuilderRequestsMetadata,
        navigationMetadata: IncomingChannelsRequestBuilderNavigationMetadata,
    },
    installedApps: {
        uriTemplate: InstalledAppsRequestBuilderUriTemplate,
        requestsMetadata: InstalledAppsRequestBuilderRequestsMetadata,
        navigationMetadata: InstalledAppsRequestBuilderNavigationMetadata,
    },
    members: {
        uriTemplate: MembersRequestBuilderUriTemplate,
        requestsMetadata: MembersRequestBuilderRequestsMetadata,
        navigationMetadata: MembersRequestBuilderNavigationMetadata,
    },
    operations: {
        uriTemplate: OperationsRequestBuilderUriTemplate,
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
        navigationMetadata: OperationsRequestBuilderNavigationMetadata,
    },
    owners: {
        uriTemplate: OwnersRequestBuilderUriTemplate,
        requestsMetadata: OwnersRequestBuilderRequestsMetadata,
        navigationMetadata: OwnersRequestBuilderNavigationMetadata,
    },
    permissionGrants: {
        uriTemplate: PermissionGrantsRequestBuilderUriTemplate,
        requestsMetadata: PermissionGrantsRequestBuilderRequestsMetadata,
        navigationMetadata: PermissionGrantsRequestBuilderNavigationMetadata,
    },
    photo: {
        uriTemplate: PhotoRequestBuilderUriTemplate,
        requestsMetadata: PhotoRequestBuilderRequestsMetadata,
        navigationMetadata: PhotoRequestBuilderNavigationMetadata,
    },
    primaryChannel: {
        uriTemplate: PrimaryChannelRequestBuilderUriTemplate,
        requestsMetadata: PrimaryChannelRequestBuilderRequestsMetadata,
        navigationMetadata: PrimaryChannelRequestBuilderNavigationMetadata,
    },
    schedule: {
        uriTemplate: ScheduleRequestBuilderUriTemplate,
        requestsMetadata: ScheduleRequestBuilderRequestsMetadata,
        navigationMetadata: ScheduleRequestBuilderNavigationMetadata,
    },
    sendActivityNotification: {
        uriTemplate: SendActivityNotificationRequestBuilderUriTemplate,
        requestsMetadata: SendActivityNotificationRequestBuilderRequestsMetadata,
    },
    tags: {
        uriTemplate: TagsRequestBuilderUriTemplate,
        requestsMetadata: TagsRequestBuilderRequestsMetadata,
        navigationMetadata: TagsRequestBuilderNavigationMetadata,
    },
    template: {
        uriTemplate: TemplateRequestBuilderUriTemplate,
        requestsMetadata: TemplateRequestBuilderRequestsMetadata,
    },
    templateDefinition: {
        uriTemplate: TemplateDefinitionRequestBuilderUriTemplate,
        requestsMetadata: TemplateDefinitionRequestBuilderRequestsMetadata,
    },
    unarchive: {
        uriTemplate: UnarchiveRequestBuilderUriTemplate,
        requestsMetadata: UnarchiveRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeamRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTeamFromDiscriminatorValue,
        queryParametersMapper: TeamRequestBuilderGetQueryParametersMapper,
    },
    put: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTeamFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeam,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TeamRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/team{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */