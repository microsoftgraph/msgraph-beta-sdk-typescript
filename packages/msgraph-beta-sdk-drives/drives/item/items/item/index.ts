/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDriveItemFromDiscriminatorValue, serializeDriveItem, type DriveItem } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ActivitiesRequestBuilderNavigationMetadata, ActivitiesRequestBuilderRequestsMetadata, ActivitiesRequestBuilderUriTemplate, type ActivitiesRequestBuilder } from './activities/';
import { AnalyticsRequestBuilderNavigationMetadata, AnalyticsRequestBuilderRequestsMetadata, AnalyticsRequestBuilderUriTemplate, type AnalyticsRequestBuilder } from './analytics/';
import { AssignSensitivityLabelRequestBuilderRequestsMetadata, AssignSensitivityLabelRequestBuilderUriTemplate, type AssignSensitivityLabelRequestBuilder } from './assignSensitivityLabel/';
import { CheckinRequestBuilderRequestsMetadata, CheckinRequestBuilderUriTemplate, type CheckinRequestBuilder } from './checkin/';
import { CheckoutRequestBuilderRequestsMetadata, CheckoutRequestBuilderUriTemplate, type CheckoutRequestBuilder } from './checkout/';
import { ChildrenRequestBuilderNavigationMetadata, ChildrenRequestBuilderRequestsMetadata, ChildrenRequestBuilderUriTemplate, type ChildrenRequestBuilder } from './children/';
import { ContentRequestBuilderRequestsMetadata, ContentRequestBuilderUriTemplate, type ContentRequestBuilder } from './content/';
import { CopyRequestBuilderRequestsMetadata, CopyRequestBuilderUriTemplate, type CopyRequestBuilder } from './copy/';
import { CreatedByUserRequestBuilderNavigationMetadata, CreatedByUserRequestBuilderRequestsMetadata, CreatedByUserRequestBuilderUriTemplate, type CreatedByUserRequestBuilder } from './createdByUser/';
import { CreateLinkRequestBuilderRequestsMetadata, CreateLinkRequestBuilderUriTemplate, type CreateLinkRequestBuilder } from './createLink/';
import { CreateUploadSessionRequestBuilderRequestsMetadata, CreateUploadSessionRequestBuilderUriTemplate, type CreateUploadSessionRequestBuilder } from './createUploadSession/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { DeltaWithTokenRequestBuilderRequestsMetadata, DeltaWithTokenRequestBuilderUriTemplate, type DeltaWithTokenRequestBuilder } from './deltaWithToken/';
import { ExtractSensitivityLabelsRequestBuilderRequestsMetadata, ExtractSensitivityLabelsRequestBuilderUriTemplate, type ExtractSensitivityLabelsRequestBuilder } from './extractSensitivityLabels/';
import { FollowRequestBuilderRequestsMetadata, FollowRequestBuilderUriTemplate, type FollowRequestBuilder } from './follow/';
import { GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderRequestsMetadata, GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderUriTemplate, type GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder } from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/';
import { InviteRequestBuilderRequestsMetadata, InviteRequestBuilderUriTemplate, type InviteRequestBuilder } from './invite/';
import { LastModifiedByUserRequestBuilderNavigationMetadata, LastModifiedByUserRequestBuilderRequestsMetadata, LastModifiedByUserRequestBuilderUriTemplate, type LastModifiedByUserRequestBuilder } from './lastModifiedByUser/';
import { ListItemRequestBuilderRequestsMetadata, ListItemRequestBuilderUriTemplate, type ListItemRequestBuilder } from './listItem/';
import { PermanentDeleteRequestBuilderRequestsMetadata, PermanentDeleteRequestBuilderUriTemplate, type PermanentDeleteRequestBuilder } from './permanentDelete/';
import { PermissionsRequestBuilderNavigationMetadata, PermissionsRequestBuilderRequestsMetadata, PermissionsRequestBuilderUriTemplate, type PermissionsRequestBuilder } from './permissions/';
import { PreviewRequestBuilderRequestsMetadata, PreviewRequestBuilderUriTemplate, type PreviewRequestBuilder } from './preview/';
import { RestoreRequestBuilderRequestsMetadata, RestoreRequestBuilderUriTemplate, type RestoreRequestBuilder } from './restore/';
import { RetentionLabelRequestBuilderRequestsMetadata, RetentionLabelRequestBuilderUriTemplate, type RetentionLabelRequestBuilder } from './retentionLabel/';
import { SearchWithQRequestBuilderRequestsMetadata, SearchWithQRequestBuilderUriTemplate, type SearchWithQRequestBuilder } from './searchWithQ/';
import { SubscriptionsRequestBuilderNavigationMetadata, SubscriptionsRequestBuilderRequestsMetadata, SubscriptionsRequestBuilderUriTemplate, type SubscriptionsRequestBuilder } from './subscriptions/';
import { ThumbnailsRequestBuilderNavigationMetadata, ThumbnailsRequestBuilderRequestsMetadata, ThumbnailsRequestBuilderUriTemplate, type ThumbnailsRequestBuilder } from './thumbnails/';
import { type UnfollowRequestBuilder, UnfollowRequestBuilderRequestsMetadata, UnfollowRequestBuilderUriTemplate } from './unfollow/';
import { type ValidatePermissionRequestBuilder, ValidatePermissionRequestBuilderRequestsMetadata, ValidatePermissionRequestBuilderUriTemplate } from './validatePermission/';
import { type VersionsRequestBuilder, VersionsRequestBuilderNavigationMetadata, VersionsRequestBuilderRequestsMetadata, VersionsRequestBuilderUriTemplate } from './versions/';
import { type WorkbookRequestBuilder, WorkbookRequestBuilderNavigationMetadata, WorkbookRequestBuilderRequestsMetadata, WorkbookRequestBuilderUriTemplate } from './workbook/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.drive entity.
 */
export interface DriveItemItemRequestBuilder extends BaseRequestBuilder<DriveItemItemRequestBuilder> {
    /**
     * Provides operations to manage the activities property of the microsoft.graph.driveItem entity.
     */
    get activities(): ActivitiesRequestBuilder;
    /**
     * Provides operations to manage the analytics property of the microsoft.graph.driveItem entity.
     */
    get analytics(): AnalyticsRequestBuilder;
    /**
     * Provides operations to call the assignSensitivityLabel method.
     */
    get assignSensitivityLabel(): AssignSensitivityLabelRequestBuilder;
    /**
     * Provides operations to call the checkin method.
     */
    get checkin(): CheckinRequestBuilder;
    /**
     * Provides operations to call the checkout method.
     */
    get checkout(): CheckoutRequestBuilder;
    /**
     * Provides operations to manage the children property of the microsoft.graph.driveItem entity.
     */
    get children(): ChildrenRequestBuilder;
    /**
     * Provides operations to manage the media for the drive entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * Provides operations to call the copy method.
     */
    get copy(): CopyRequestBuilder;
    /**
     * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
     */
    get createdByUser(): CreatedByUserRequestBuilder;
    /**
     * Provides operations to call the createLink method.
     */
    get createLink(): CreateLinkRequestBuilder;
    /**
     * Provides operations to call the createUploadSession method.
     */
    get createUploadSession(): CreateUploadSessionRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to call the extractSensitivityLabels method.
     */
    get extractSensitivityLabels(): ExtractSensitivityLabelsRequestBuilder;
    /**
     * Provides operations to call the follow method.
     */
    get follow(): FollowRequestBuilder;
    /**
     * Provides operations to call the invite method.
     */
    get invite(): InviteRequestBuilder;
    /**
     * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
     */
    get lastModifiedByUser(): LastModifiedByUserRequestBuilder;
    /**
     * Provides operations to manage the listItem property of the microsoft.graph.driveItem entity.
     */
    get listItem(): ListItemRequestBuilder;
    /**
     * Provides operations to call the permanentDelete method.
     */
    get permanentDelete(): PermanentDeleteRequestBuilder;
    /**
     * Provides operations to manage the permissions property of the microsoft.graph.driveItem entity.
     */
    get permissions(): PermissionsRequestBuilder;
    /**
     * Provides operations to call the preview method.
     */
    get preview(): PreviewRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get restore(): RestoreRequestBuilder;
    /**
     * Provides operations to manage the retentionLabel property of the microsoft.graph.driveItem entity.
     */
    get retentionLabel(): RetentionLabelRequestBuilder;
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.driveItem entity.
     */
    get subscriptions(): SubscriptionsRequestBuilder;
    /**
     * Provides operations to manage the thumbnails property of the microsoft.graph.driveItem entity.
     */
    get thumbnails(): ThumbnailsRequestBuilder;
    /**
     * Provides operations to call the unfollow method.
     */
    get unfollow(): UnfollowRequestBuilder;
    /**
     * Provides operations to call the validatePermission method.
     */
    get validatePermission(): ValidatePermissionRequestBuilder;
    /**
     * Provides operations to manage the versions property of the microsoft.graph.driveItem entity.
     */
    get versions(): VersionsRequestBuilder;
    /**
     * Provides operations to manage the workbook property of the microsoft.graph.driveItem entity.
     */
    get workbook(): WorkbookRequestBuilder;
    /**
     * Delete a DriveItem by using its ID or path.Deleting items using this method moves the items to the recycle bin instead of permanently deleting the item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Provides operations to call the delta method.
     * @param token Usage: token='{token}'
     * @returns a deltaWithTokenRequestBuilder
     */
     deltaWithToken(token: string | undefined) : DeltaWithTokenRequestBuilder;
    /**
     * All items contained in the drive. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItem
     */
     get(requestConfiguration?: RequestConfiguration<DriveItemItemRequestBuilderGetQueryParameters> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @param endDateTime Usage: endDateTime='{endDateTime}'
     * @param interval Usage: interval='{interval}'
     * @param startDateTime Usage: startDateTime='{startDateTime}'
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
     getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(endDateTime: string | undefined, interval: string | undefined, startDateTime: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder;
    /**
     * To move a DriveItem to a new parent item, your app requests to update the parentReference of the DriveItem to move. This is a special case of the Update method.Your app can combine moving an item to a new container and updating other properties of the item into a single request. Items cannot be moved between Drives using this request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItem
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-move?view=graph-rest-1.0|Find more info here}
     */
     patch(body: DriveItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Provides operations to call the search method.
     * @param q Usage: q='{q}'
     * @returns a searchWithQRequestBuilder
     */
     searchWithQ(q: string | undefined) : SearchWithQRequestBuilder;
    /**
     * Delete a DriveItem by using its ID or path.Deleting items using this method moves the items to the recycle bin instead of permanently deleting the item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * All items contained in the drive. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DriveItemItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * To move a DriveItem to a new parent item, your app requests to update the parentReference of the DriveItem to move. This is a special case of the Update method.Your app can combine moving an item to a new container and updating other properties of the item into a single request. Items cannot be moved between Drives using this request.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DriveItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * All items contained in the drive. Read-only. Nullable.
 */
export interface DriveItemItemRequestBuilderGetQueryParameters {
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
const DriveItemItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DriveItemItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DriveItemItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deltaWithToken: {
        uriTemplate: DeltaWithTokenRequestBuilderUriTemplate,
        requestsMetadata: DeltaWithTokenRequestBuilderRequestsMetadata,
    },
    getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval: {
        uriTemplate: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderUriTemplate,
        requestsMetadata: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilderRequestsMetadata,
    },
    searchWithQ: {
        uriTemplate: SearchWithQRequestBuilderUriTemplate,
        requestsMetadata: SearchWithQRequestBuilderRequestsMetadata,
    },
    activities: {
        uriTemplate: ActivitiesRequestBuilderUriTemplate,
        requestsMetadata: ActivitiesRequestBuilderRequestsMetadata,
        navigationMetadata: ActivitiesRequestBuilderNavigationMetadata,
    },
    analytics: {
        uriTemplate: AnalyticsRequestBuilderUriTemplate,
        requestsMetadata: AnalyticsRequestBuilderRequestsMetadata,
        navigationMetadata: AnalyticsRequestBuilderNavigationMetadata,
    },
    assignSensitivityLabel: {
        uriTemplate: AssignSensitivityLabelRequestBuilderUriTemplate,
        requestsMetadata: AssignSensitivityLabelRequestBuilderRequestsMetadata,
    },
    checkin: {
        uriTemplate: CheckinRequestBuilderUriTemplate,
        requestsMetadata: CheckinRequestBuilderRequestsMetadata,
    },
    checkout: {
        uriTemplate: CheckoutRequestBuilderUriTemplate,
        requestsMetadata: CheckoutRequestBuilderRequestsMetadata,
    },
    children: {
        uriTemplate: ChildrenRequestBuilderUriTemplate,
        requestsMetadata: ChildrenRequestBuilderRequestsMetadata,
        navigationMetadata: ChildrenRequestBuilderNavigationMetadata,
    },
    content: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
    copy: {
        uriTemplate: CopyRequestBuilderUriTemplate,
        requestsMetadata: CopyRequestBuilderRequestsMetadata,
    },
    createdByUser: {
        uriTemplate: CreatedByUserRequestBuilderUriTemplate,
        requestsMetadata: CreatedByUserRequestBuilderRequestsMetadata,
        navigationMetadata: CreatedByUserRequestBuilderNavigationMetadata,
    },
    createLink: {
        uriTemplate: CreateLinkRequestBuilderUriTemplate,
        requestsMetadata: CreateLinkRequestBuilderRequestsMetadata,
    },
    createUploadSession: {
        uriTemplate: CreateUploadSessionRequestBuilderUriTemplate,
        requestsMetadata: CreateUploadSessionRequestBuilderRequestsMetadata,
    },
    delta: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
    extractSensitivityLabels: {
        uriTemplate: ExtractSensitivityLabelsRequestBuilderUriTemplate,
        requestsMetadata: ExtractSensitivityLabelsRequestBuilderRequestsMetadata,
    },
    follow: {
        uriTemplate: FollowRequestBuilderUriTemplate,
        requestsMetadata: FollowRequestBuilderRequestsMetadata,
    },
    invite: {
        uriTemplate: InviteRequestBuilderUriTemplate,
        requestsMetadata: InviteRequestBuilderRequestsMetadata,
    },
    lastModifiedByUser: {
        uriTemplate: LastModifiedByUserRequestBuilderUriTemplate,
        requestsMetadata: LastModifiedByUserRequestBuilderRequestsMetadata,
        navigationMetadata: LastModifiedByUserRequestBuilderNavigationMetadata,
    },
    listItem: {
        uriTemplate: ListItemRequestBuilderUriTemplate,
        requestsMetadata: ListItemRequestBuilderRequestsMetadata,
    },
    permanentDelete: {
        uriTemplate: PermanentDeleteRequestBuilderUriTemplate,
        requestsMetadata: PermanentDeleteRequestBuilderRequestsMetadata,
    },
    permissions: {
        uriTemplate: PermissionsRequestBuilderUriTemplate,
        requestsMetadata: PermissionsRequestBuilderRequestsMetadata,
        navigationMetadata: PermissionsRequestBuilderNavigationMetadata,
    },
    preview: {
        uriTemplate: PreviewRequestBuilderUriTemplate,
        requestsMetadata: PreviewRequestBuilderRequestsMetadata,
    },
    restore: {
        uriTemplate: RestoreRequestBuilderUriTemplate,
        requestsMetadata: RestoreRequestBuilderRequestsMetadata,
    },
    retentionLabel: {
        uriTemplate: RetentionLabelRequestBuilderUriTemplate,
        requestsMetadata: RetentionLabelRequestBuilderRequestsMetadata,
    },
    subscriptions: {
        uriTemplate: SubscriptionsRequestBuilderUriTemplate,
        requestsMetadata: SubscriptionsRequestBuilderRequestsMetadata,
        navigationMetadata: SubscriptionsRequestBuilderNavigationMetadata,
    },
    thumbnails: {
        uriTemplate: ThumbnailsRequestBuilderUriTemplate,
        requestsMetadata: ThumbnailsRequestBuilderRequestsMetadata,
        navigationMetadata: ThumbnailsRequestBuilderNavigationMetadata,
    },
    unfollow: {
        uriTemplate: UnfollowRequestBuilderUriTemplate,
        requestsMetadata: UnfollowRequestBuilderRequestsMetadata,
    },
    validatePermission: {
        uriTemplate: ValidatePermissionRequestBuilderUriTemplate,
        requestsMetadata: ValidatePermissionRequestBuilderRequestsMetadata,
    },
    versions: {
        uriTemplate: VersionsRequestBuilderUriTemplate,
        requestsMetadata: VersionsRequestBuilderRequestsMetadata,
        navigationMetadata: VersionsRequestBuilderNavigationMetadata,
    },
    workbook: {
        uriTemplate: WorkbookRequestBuilderUriTemplate,
        requestsMetadata: WorkbookRequestBuilderRequestsMetadata,
        navigationMetadata: WorkbookRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DriveItemItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        queryParametersMapper: DriveItemItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDriveItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DriveItemItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */